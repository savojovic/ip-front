import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl, museumEndPoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MuseumsService {

  constructor(private http: HttpClient) { }

  //Http Client get method
  public getMuseums(): Observable<any> {
    const url = `${baseUrl}${museumEndPoint}`;
    return this.http.get<any>(url);
  }
  public getMuseumById(id?: any){
    return this.http.get<any>(baseUrl+museumEndPoint+`?id=${id}`);
  }
}