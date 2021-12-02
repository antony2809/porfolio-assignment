import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountsLandingStore } from './accounts-landing.store';

@Component({
  selector: 'sem-accounts-landing',
  templateUrl: './accounts-landing.component.html',
  styleUrls: ['./accounts-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountsLandingStore],
})
export class AccountsLandingComponent {
  public loading$ = this.componentStore.loading$;
  public creating$ = this.componentStore.creating$;
  public accounts$ = this.componentStore.accounts$;
  public buttonText$ = this.componentStore.buttonText$;

  constructor(public componentStore: AccountsLandingStore) {}

  public handleCreateAccount() {
    this.componentStore.handleCreateAccount();
  }
}
