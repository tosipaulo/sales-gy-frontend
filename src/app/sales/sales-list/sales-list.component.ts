import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatPaginator, MatSort } from '@angular/material';

import { SalesService } from './../sales.service';
import { UserService } from 'src/app/core/user/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },

];

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})


export class SalesListComponent implements OnInit {

  displayedColumns: string[] = ['cliente', 'valor', 'vencimento', 'tipoPagamento'];
  dataSource = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private salesService: SalesService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {

    this.salesService
      .list()
      .subscribe(
        (response) => {
          console.log(response);
          this.dataSource = response['sale'];
        },
        (err) => {
          console.log(err.status)
          if (err.status == 401) {
            this.userService.removeUser();
            this.router.navigate(['']);
          }
        }
      )

  }


}
