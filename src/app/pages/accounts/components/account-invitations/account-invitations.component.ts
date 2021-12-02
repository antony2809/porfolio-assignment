import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Account, AccountType } from '@portfolio/models';

@Component({
  selector: 'sem-account-invitations',
  templateUrl: './account-invitations.component.html',
  styleUrls: ['./account-invitations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountInvitationsComponent {}
