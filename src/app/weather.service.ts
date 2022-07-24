import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { citiesForACountryUrl, openWeatherApiKey, openWeatherUrl, restCountriesAlpha2CodeUrl, weatherUnits } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }
  public getWeatherFor(code?: string) {
    const url = `${openWeatherUrl}?q=${code}&${openWeatherApiKey}&cnt=1&${weatherUnits}`;
    return this.http.get<any>(url);
  }
  public getAlpha2Code(country?: string){
    return this.http.get<any>(restCountriesAlpha2CodeUrl+country);
  }
  public getCities(country?: string) {
    return this.http.post<any>(citiesForACountryUrl, { country: `${country}` });
  }
  public getRanndomCity(cities: any){
    return cities.data[this.randomIntFromInterval(0, cities.data.length)];
  }
  private randomIntFromInterval(min: any, max: any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}