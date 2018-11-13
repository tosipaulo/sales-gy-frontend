import { Component, OnInit } from '@angular/core';

import { SalesService } from './../sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  constructor(private salesService: SalesService) { }

  ngOnInit() {

    this.salesService
      .list()
      .subscribe(
        (response) => console.log(response),
        err => console.log(err)
      )

  }


}
