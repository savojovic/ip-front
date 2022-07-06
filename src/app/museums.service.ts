import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MuseumsService {

  constructor(private http: HttpClient) { }

  //Http Client get method
  public getMuseums(): Observable<any> {
    const url = 'http://localhost:8080/museums';
    return this.http.get<any>(url);
  }
}