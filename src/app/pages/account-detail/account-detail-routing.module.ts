import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailLandingComponent } from './containers/account-detail-landing/account-detail-landing.component';

const routes: Routes = [{ path: '', component: AccountDetailLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDetailRoutingModule {}
