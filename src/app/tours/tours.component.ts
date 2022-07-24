import { Component, Input, OnInit } from '@angular/core';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours = new Array<any>();

  @Input() museumId?: any;

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.getToursByMuseumId(this.museumId).subscribe(res=>{
      this.tours.push(res);
      console.log(this.tours);
    })
  }
}
