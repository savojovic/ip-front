import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, loginEndPoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public logIn(username?: string, password?: string){
    const logInUrl = `${baseUrl}${loginEndPoint}`;
    return this.http.post(logInUrl,{"username":username, "password": password});
  }
}