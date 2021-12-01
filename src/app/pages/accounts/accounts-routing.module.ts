import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsLandingComponent } from './containers/accounts-landing/accounts-landing.component';

const routes: Routes = [{ path: '', component: AccountsLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
