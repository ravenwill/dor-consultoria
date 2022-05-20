import { CovidService } from './../../services/covid/covid.service';
import { CovidResponse, CovidResponseData } from './../../models/covid';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss']
})
export class CovidListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  data: MatTableDataSource<CovidResponseData> = new MatTableDataSource<CovidResponseData>([]);
  array: CovidResponseData[] = [];
  displayedColumns: string[] = ['country', 'cases', 'confirmed', 'deaths', 'recovered', 'updated_at'];
  
  pageSize = 10;
  currentPage = 0;
  totalSize = 0;


  constructor(
    private _covidService: CovidService,
    private _paginatorIntl: MatPaginatorIntl
  ) {
    this._paginatorIntl.itemsPerPageLabel = 'Itens por página';
    this._paginatorIntl.firstPageLabel = 'Primeira página';
    this._paginatorIntl.lastPageLabel = 'Última página';
    this._paginatorIntl.nextPageLabel = 'Proxima página';
    this._paginatorIntl.previousPageLabel = 'Página anterior'
  }

  ngOnInit(): void {
    this.getPerCountries();
  }

  handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this._iterator();
  }


  getPerCountries() {
    this._covidService.getAllCountries().subscribe(
      (res: CovidResponse) => {
        this.data = new MatTableDataSource<CovidResponseData>(res.data);
        this.data.paginator = this.paginator;
        this.array = res.data;
        this.totalSize = this.array.length;
      }
    );
  }

  private _iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.data = new MatTableDataSource<CovidResponseData>(part);
    this.data.paginator = this.paginator;
  }

}
