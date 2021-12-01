import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsLandingComponent } from './containers/accounts-landing/accounts-landing.component';
import { AccountInvitationsComponent } from './components/account-invitations/account-invitations.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountCardComponent } from './components/account-card/account-card.component';

@NgModule({
  declarations: [AccountsLandingComponent, AccountInvitationsComponent, AccountListComponent, AccountCardComponent],
  imports: [CommonModule, AccountsRoutingModule],
})
export class AccountsModule {}
