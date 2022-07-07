import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
    
  }
  public getWeatherFor(code?: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${code}&appid=63af5b14517966d094353d593b864a5f&cnt=1`;
    return this.http.get<any>(url);
  }
}
