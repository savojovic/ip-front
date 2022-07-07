import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-museumdetails',
  templateUrl: './museumdetails.component.html',
  styleUrls: ['./museumdetails.component.css']
})
export class MuseumdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);//+1 for excluding '/' from /id
    console.log(url);
  }
}