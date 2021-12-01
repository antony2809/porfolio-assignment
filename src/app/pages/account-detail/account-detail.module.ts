import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailRoutingModule } from './account-detail-routing.module';
import { AccountDetailLandingComponent } from './containers/account-detail-landing/account-detail-landing.component';
import { AccountGoalComponent } from './components/account-goal/account-goal.component';
import { AccountCurrentComponent } from './components/account-current/account-current.component';
import { AccountChartComponent } from './components/account-chart/account-chart.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';

@NgModule({
  declarations: [
    AccountDetailLandingComponent,
    AccountGoalComponent,
    AccountCurrentComponent,
    AccountChartComponent,
    AccountHeaderComponent
  ],
  imports: [CommonModule, AccountDetailRoutingModule],
})
export class AccountDetailModule {}
