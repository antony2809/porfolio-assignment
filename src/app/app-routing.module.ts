import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('@portfolio/pages/accounts').then((m) => m.AccountsModule) },
  { path: ':id', loadChildren: () => import('@portfolio/pages/account-detail').then((m) => m.AccountDetailModule) },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
