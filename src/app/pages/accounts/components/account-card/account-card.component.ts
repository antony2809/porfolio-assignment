import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Account, AccountType } from '@portfolio/models';

@Component({
  selector: 'sem-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCardComponent {
  @Input()
  public account?: Account;

  public accountType = AccountType;
}
