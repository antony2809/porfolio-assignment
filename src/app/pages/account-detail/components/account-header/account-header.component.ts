import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Account, AccountType } from '@portfolio/models';
import { accountDetailActions } from '../../constants';

@Component({
  selector: 'sem-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountHeaderComponent {
  @Input()
  public account!: Account;

  public actions = accountDetailActions;

  public readonly accountType = AccountType;
}
