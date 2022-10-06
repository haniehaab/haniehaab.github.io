import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { City } from '../models/Location.model';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-serarch',
  templateUrl: './serarch.component.html',
  styleUrls: ['./serarch.component.scss']
})
export class SerarchComponent implements OnInit {


  countries: any[] = [];
  cities: any[] = [];
  queryFieldCuontry: FormControl = new FormControl();
  queryFieldCity: FormControl = new FormControl();

  selectedCountryID = '';
  selectedCityName = '';

  constructor(private locationService: LocationService, private weatherService: WeatherService) { }

  ngOnInit(): void {

    //search Countries
    this.queryFieldCuontry.valueChanges
    .pipe(debounceTime(200),
          distinctUntilChanged(),
          switchMap(queryField =>this.locationService.SearchCountries(queryField)))
    .subscribe((res: any)=> this.countries = res);
   
  }


  mySelectHandler(e:any){
    debugger
    let find = this.countries.find(x => x?.name === e.target.value);
    this.selectedCountryID = find?.id;
    //search Cities
    this.queryFieldCity.valueChanges
    .pipe(debounceTime(200),
          distinctUntilChanged(),
          switchMap(queryField =>this.locationService.SearchCities(queryField,this.selectedCountryID)))
    .subscribe((res: City[])=> this.cities = res);
      
  }


  setCity(e: any){
    debugger
    this.selectedCityName = e.target.value;
    this.weatherService.LoadCurrentWeather(this.selectedCityName).subscribe();
  }
}
