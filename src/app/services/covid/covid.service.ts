import { CovidResponse } from './../../models/covid';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllCountries() {
    return this._http.get<CovidResponse>(`${environment.apiCovid}/report/v1/countries`);
  }

  
}
