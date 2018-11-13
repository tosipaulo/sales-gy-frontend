import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './home/signin/signin.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'sales',
    component: SalesListComponent
  },
  {
    path: '*',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
