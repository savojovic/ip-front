import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { formatDate } from '@angular/common';
import { openWeatherImgUrl } from 'src/environments/environment';
import { MuseumsService } from '../museums.service';

const FIRST_ELEMENT = 0;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  @Input() museumId: any;

  constructor(public weatherService: WeatherService, private museumService: MuseumsService) {
    this.date = formatDate(new Date(), 'dd/MM/YYYY', 'en');
  }

  cityName: any;
  iconCode: any;
  date: any;
  imgUrl: any;
  temp: any;

  ngOnInit(): void {
    console.log("Init Weather component")
    //TODO: Get a random city from the same country the museum is in
    this.museumService.getMuseumById(this.museumId).subscribe(res=>{
      var country = res[0].address.country;
      console.log("Country "+ country);
      this.weatherService.getCities(country).subscribe(cities => {
        this.weatherService.getAlpha2Code(country).subscribe(res => {
          var code = res[FIRST_ELEMENT].cca2;
          var city = this.weatherService.getRanndomCity(cities);
          this.weatherService.getWeatherFor(`${city}, ${code}`).subscribe(response => {
            this.cityName = response.name;
            this.iconCode = response.weather[0].icon;
            this.imgUrl = openWeatherImgUrl;
            this.temp = response.main.temp;
          })
        })
      });
    })
    
  }
}