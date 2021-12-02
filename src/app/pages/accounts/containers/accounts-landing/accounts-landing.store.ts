import { ComponentStore } from '@ngrx/component-store';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Account } from '@portfolio/models';
import { Injectable } from '@angular/core';
import {
  ACCOUNT_COLLECTION,
  ACCOUNT_CREATE_LABEL,
  ACCOUNT_CREATING_LABEL,
  ACCOUNT_CREATION_ERROR_LABEL,
  ACCOUNT_HISTORY_COLLECTION,
} from '@portfolio/constants';
import {
  collection,
  collectionData,
  doc,
  Firestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  writeBatch,
} from '@angular/fire/firestore';
import { forkJoin, from, Observable, of } from 'rxjs';
import { generateAccount } from '@portfolio/utilities';

interface AccountLandingState {
  loading: boolean;
  creating: boolean;
}

const initialState = {
  loading: true,
  creating: false,
};

@Injectable()
export class AccountsLandingStore extends ComponentStore<AccountLandingState> {
  private accountsCollection = collection(this.firestore, ACCOUNT_COLLECTION);

  public readonly accounts$: Observable<Account[]> = collectionData(
    query(this.accountsCollection, orderBy('created', 'asc'))
  ) as Observable<Account[]>;

  public readonly loading$ = this.select(({ loading }) => loading);

  public readonly creating$ = this.select(({ creating }) => creating);

  public readonly buttonText$ = this.loading$.pipe(
    map((loading) => (loading ? ACCOUNT_CREATING_LABEL : ACCOUNT_CREATE_LABEL))
  );

  constructor(private firestore: Firestore) {
    super(initialState);
  }

  public handleCreateAccount() {
    this.patchState({ creating: true });
    this.createAccount();
  }

  private readonly accountsFetched = this.effect<Account[]>((void$) =>
    void$.pipe(tap(() => this.patchState({ loading: false, creating: false })))
  )(this.accounts$);

  private createAccount = this.effect<void>((void$) =>
    void$.pipe(
      map(() => generateAccount()),
      switchMap(({ account, history }) =>
        forkJoin([
          from(setDoc(doc(this.accountsCollection, account.id), { ...account, created: serverTimestamp() })),
          of(writeBatch(this.firestore)).pipe(
            switchMap((batch) => {
              for (const ref of history) {
                batch.set(doc(this.accountsCollection, account.id, ACCOUNT_HISTORY_COLLECTION, ref.id), ref);
              }
              return from(batch.commit());
            })
          ),
        ]).pipe(
          catchError(() => {
            alert(ACCOUNT_CREATION_ERROR_LABEL);
            return of(null);
          })
        )
      )
    )
  );
}
