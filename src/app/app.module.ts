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
import { HttpClientModule } from '@angular/common/http';
import { MuseumdetailsComponent } from './museumdetails/museumdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WeatherComponent } from './weather/weather.component';
import { MuseumcardComponent } from './museumcard/museumcard.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MuseumsComponent,
    ToursComponent,
    MuseumdetailsComponent,
    HomepageComponent,
    WeatherComponent,
    MuseumcardComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
