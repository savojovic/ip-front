import {Component, OnInit} from '@angular/core';
import { MuseumsService } from '../museums.service';

/**
 * @title Basic list
 */
@Component({
  selector: 'museums-component',
  templateUrl: 'museums.component.html',
  styleUrls: ['museums.component.css']
})
export class MuseumsComponent implements OnInit{

  museums = new Array<any>();

  constructor(public museumService: MuseumsService){}

  ngOnInit(): void {
    console.log("Init museum component");
    this.museumService.getMuseums().subscribe(response => {
      console.log(response)
      this.museums = response;
    })
  }
  
}