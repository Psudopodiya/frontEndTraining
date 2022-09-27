import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http"; 
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrAPIService {

  constructor(private http: HttpClient) { 
  }
  getData(country1 : String, country2:String, value:Number){
    let url = 'https://api.exchangerate.host/convert?from=' + country1 + '&to=' + country2 + '&amount='+value;
    return this.http.get(url);
  }
  getCountries(){
    let url="https://api.exchangerate.host/symbols";
    return this.http.get(url);
  }
}
