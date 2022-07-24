import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, tourEndPoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { 
  }

  public getToursByMuseumId(id?: any){
    const url = baseUrl+tourEndPoint+`?museumId=${id}`;
    return this.http.get<any>(url);
  }
}
