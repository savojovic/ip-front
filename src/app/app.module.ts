import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MuseumsComponent } from './museums/museums.component'
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ToursComponent } from './tours/tours.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MuseumsComponent,
    ToursComponent
  ],
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
