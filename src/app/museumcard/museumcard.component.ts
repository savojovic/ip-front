import { Component, OnInit, Input } from '@angular/core';
import { MuseumsService } from '../museums.service';

@Component({
  selector: 'app-museumcard',
  templateUrl: './museumcard.component.html',
  styleUrls: ['./museumcard.component.css']
})
export class MuseumcardComponent implements OnInit {
  @Input() museumId: any; 

  constructor(private museumService: MuseumsService) { }
  name?: any;
  type?: any;
  
  ngOnInit(): void {
    this.museumService.getMuseumById(this.museumId).subscribe(museum=>{
      this.name = museum[0].name;
      this.type = museum[0].type;
    })
  }
}