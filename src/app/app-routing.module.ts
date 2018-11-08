import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
