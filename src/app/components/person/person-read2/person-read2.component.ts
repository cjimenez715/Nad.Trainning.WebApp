// import { Person } from 'src/app/models/person';
// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTable } from '@angular/material/table';
// import { PersonRead2DataSource } from './person-read2-datasource';

// @Component({
//   selector: 'app-person-read2',
//   templateUrl: './person-read2.component.html',
//   styleUrls: ['./person-read2.component.css']
// })
// export class PersonRead2Component implements AfterViewInit, OnInit {
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
//   @ViewChild(MatTable) table: MatTable<Person>;
//   dataSource: PersonRead2DataSource;

//   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
//   displayedColumns = ['id', 'name','lastName','age'];

//   ngOnInit() {
//     this.dataSource = new PersonRead2DataSource();
//   }

//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//     this.dataSource.paginator = this.paginator;
//     this.table.dataSource = this.dataSource;
//   }
// }
