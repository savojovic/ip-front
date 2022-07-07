import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { openWeatherApiKey, openWeatherUrl } from 'src/environments/environment';

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
}