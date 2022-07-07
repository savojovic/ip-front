import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  
  constructor(public weatherService: WeatherService) { 
    this.date = formatDate(new Date(),'dd/MM/YYYY', 'en');
  }

  cityName: any;
  iconCode: any;
  date: any;

  ngOnInit(): void {
    console.log("Init Weather component")
    //TODO: Get a random city from the same country the museum is in
    this.weatherService.getWeatherFor("Banja Luka, ba").subscribe(response =>{
      this.cityName = response.name;
      this.iconCode = response.weather[0].icon;
    })
  }
}