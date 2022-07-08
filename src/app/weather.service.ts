import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { citiesForACountryUrl, openWeatherApiKey, openWeatherUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }
  public getWeatherFor(code?: string) {
    const url = `${openWeatherUrl}?q=${code}&${openWeatherApiKey}&cnt=1`;
    return this.http.get<any>(url);
  }
  public getRandomCity(country?: string) {
    this.http.post<any>(citiesForACountryUrl, { country: `${country}` }).subscribe(res => {
      console.log("Country " + country);
      console.log(res);
    });

  }
  private randomIntFromInterval(min: any, max: any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}