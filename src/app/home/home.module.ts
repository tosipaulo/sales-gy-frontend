import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MessageModule } from '../shared/components/message/message.module';

import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    HttpClientModule
  ],
  declarations: [SigninComponent]
})
export class HomeModule { }
