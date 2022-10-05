import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { City } from '../models/Location.model';




@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(private http: HttpClient) {  }


  SearchCities(queryString: string) {
    debugger
    return this.http.get<City[]>('https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q='+ queryString +'&type=CITY', {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Key', 'd479109b24msh43ee867575ebc23p15f788jsn6ff116de8cd7')
      .set('X-RapidAPI-Host', 'spott.p.rapidapi.com'),
      responseType: 'json'
     
    })

  }



  SearchCountries(queryString: string) {
 
    return this.http.get<any>('https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&q='+ queryString +'&type=COUNTRY', {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Key', 'd479109b24msh43ee867575ebc23p15f788jsn6ff116de8cd7')
      .set('X-RapidAPI-Host', 'spott.p.rapidapi.com'),
      responseType: 'json'
    })



  }

}
