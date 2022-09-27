import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private url = 'https://api.coinlore.net/api/tickers/?start=100&limit=100';
   
  constructor(private httpClient: HttpClient) { }
  
  getCoins(){
    debugger
    let test = this.httpClient.get(this.url);
    return this.httpClient.get(this.url);
  }
}
