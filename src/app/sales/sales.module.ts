import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';

import { SalesListComponent } from './sales-list/sales-list.component';
import { RequestInterceptor } from '../core/auth/request.interceptor';
import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ],
  declarations: [SalesListComponent, HeaderComponent],
  exports: [SalesListComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class SalesModule { }
