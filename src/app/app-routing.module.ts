import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MuseumdetailsComponent } from './museumdetails/museumdetails.component';
import { MuseumsComponent } from './museums/museums.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: "details/:id",
    component: MuseumdetailsComponent,
  },
  {
    path: "",
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }