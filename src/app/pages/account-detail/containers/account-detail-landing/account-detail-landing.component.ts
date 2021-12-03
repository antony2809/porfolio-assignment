import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountDetailLandingStore } from './account-detail-landing.store';

@Component({
  selector: 'sem-account-detail-landing',
  templateUrl: './account-detail-landing.component.html',
  styleUrls: ['./account-detail-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountDetailLandingStore],
})
export class AccountDetailLandingComponent {
  public loading$ = this.componentStore.loading$;
  public account$ = this.componentStore.account$;
  public history$ = this.componentStore.history$;
  public initialInvestment$ = this.componentStore.initialInvestment$;
  public currentBalance$ = this.componentStore.currentBalance$;
  public total$ = this.componentStore.total$;

  constructor(private componentStore: AccountDetailLandingStore) {}
}
