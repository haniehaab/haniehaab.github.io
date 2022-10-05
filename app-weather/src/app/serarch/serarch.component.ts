import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
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

  selectedCountryID = 0;
  selectedCityName = 0;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    //search Countries
    this.queryFieldCuontry.valueChanges
    .pipe(debounceTime(200),
          distinctUntilChanged(),
          switchMap(queryField =>this.locationService.SearchCountries(queryField)))
    .subscribe((res: any)=> this.countries = res);
    
    //search Cities
    this.queryFieldCity.valueChanges
    .pipe(debounceTime(200),
          distinctUntilChanged(),
          switchMap(queryField =>this.locationService.SearchCities(queryField)))
    .subscribe((res: City[])=> this.cities = res);


  }

}
