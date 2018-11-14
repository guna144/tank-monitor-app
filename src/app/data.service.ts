import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  
  constructor(private _http : HttpClient){}

  getData() {
    return this._http.get('./assets/data/address.json');
  }
}