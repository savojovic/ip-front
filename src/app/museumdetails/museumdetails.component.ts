import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MuseumsService } from '../museums.service';

@Component({
  selector: 'app-museumdetails',
  templateUrl: './museumdetails.component.html',
  styleUrls: ['./museumdetails.component.css']
})
export class MuseumdetailsComponent implements OnInit {
  constructor(private router: Router, private museumService: MuseumsService) { }

  tours: any;
  museumName: any;
  museumId: any;
  
  ngOnInit(): void {
    this.museumId = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);//+1 for excluding '/' from /id
    this.museumService.getMuseumById(this.museumId).subscribe(res=>{
      this.museumName=res[0].name;
      this.tours = res[0].tours;
    })
  }
}