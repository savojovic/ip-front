import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { homePage } from 'src/environments/environment';
/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {
  constructor(public router: Router){
    
  }
    homePage = homePage;
}
