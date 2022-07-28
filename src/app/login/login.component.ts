import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    this.loginService.logIn(this.username, this.password).subscribe(res=>{
      //TODO: Extract token
      console.log(res);
    })
  }
}