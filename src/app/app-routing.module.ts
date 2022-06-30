import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumsComponent } from './museums/museums.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {
  //   path: "home",
  //   component:TestComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
