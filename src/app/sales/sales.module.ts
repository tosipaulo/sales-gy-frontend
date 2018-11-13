import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SalesListComponent } from './sales-list/sales-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [SalesListComponent],
  exports: [SalesListComponent]
})
export class SalesModule { }
