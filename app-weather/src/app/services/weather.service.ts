import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {WeatherData} from '../models/weather.model'
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather !: WeatherData;
  weatherChanged = new Subject<WeatherData>();
  constructor(private http: HttpClient) { }

  LoadCurrentWeather(cityName: string): Observable<any> {
    debugger
    return this.http.get<WeatherData>("https://api.openweathermap.org/data/2.5/weather?q="+cityName+",&appid=470e0fb69289ec7cbbf594b4bcf3feaf"+"&units=metric" )
    .pipe(
      tap(res => this.setWeather(res))
    );
  }
  
  setWeather(_weather: WeatherData){
      this.weather = _weather;
      this.weatherChanged.next(this.weather);
    }
    
  getWeather() {
      return this.weather;
    }

}