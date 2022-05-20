import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidListRoutingModule } from './covid-list-routing.module';
import { CovidListComponent } from './covid-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    CovidListComponent
  ],
  imports: [
    CommonModule,
    CovidListRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CovidListComponent
  ]
})
export class CovidListModule { }
