import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  LoadCurrentWeather(cityName: string): Observable<any> {
    debugger
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+cityName+",&appid=470e0fb69289ec7cbbf594b4bcf3feaf"+"&units=metric" );
  }



}