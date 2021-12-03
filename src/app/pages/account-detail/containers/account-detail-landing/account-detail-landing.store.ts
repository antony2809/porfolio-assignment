import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ActivatedRoute } from '@angular/router';
import { collection, collectionData, doc, docData, Firestore, limit, orderBy, query } from '@angular/fire/firestore';
import { ACCOUNT_COLLECTION, ACCOUNT_HISTORY_COLLECTION } from '@portfolio/constants';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Account, AccountHistory } from '@portfolio/models';

interface AccountDetailLandingState {
  loading: boolean;
  initialInvestment: number;
  currentBalance: number;
}

const initialState = {
  loading: true,
  initialInvestment: 0,
  currentBalance: 0,
};

@Injectable()
export class AccountDetailLandingStore extends ComponentStore<AccountDetailLandingState> {
  private accountsCollection = collection(this.firestore, ACCOUNT_COLLECTION);

  public readonly initialInvestment$ = this.select(({ initialInvestment }) => initialInvestment).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  public readonly currentBalance$ = this.select(({ currentBalance }) => currentBalance).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  public readonly total$ = combineLatest([this.initialInvestment$, this.currentBalance$]).pipe(
    map(([initial, current]) => current - initial)
  );

  public readonly loading$ = this.select(({ loading }) => loading);

  public readonly accountId$ = this.route.params.pipe(map(({ id }) => id));

  public readonly account$ = this.accountId$.pipe(
    switchMap((accountId) => docData(doc(this.accountsCollection, accountId)) as Observable<Account>),
    take(1)
  );

  public history$ = this.accountId$.pipe(
    switchMap(
      (accountId) =>
        collectionData(
          query(
            collection(this.accountsCollection, accountId, ACCOUNT_HISTORY_COLLECTION),
            orderBy('created', 'asc'),
            limit(180)
          )
        ) as Observable<AccountHistory[]>
    ),
    take(1)
  );

  public updateAccountDate = this.effect<AccountHistory[]>((history$) =>
    history$.pipe(
      tap((history) =>
        this.patchState({
          initialInvestment: history[0]?.value,
          currentBalance: history[history.length - 1]?.value,
        })
      )
    )
  )(this.history$);

  public readonly setLoading = this.effect<Account>((account$) =>
    account$.pipe(tap(() => this.patchState({ loading: false })))
  )(this.account$);

  constructor(private route: ActivatedRoute, private firestore: Firestore) {
    super(initialState);
  }
}
