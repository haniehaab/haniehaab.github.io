import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityName: string = 'Tehran';
  weatherData!: WeatherData;
  subscription!: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.subscription = this.weatherService.weatherChanged
    .subscribe(
      (weather: WeatherData) => {
        this.weatherData = weather;
      }
    );
    this.weatherData = this.weatherService.getWeather();
  }

}
