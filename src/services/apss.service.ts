import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApssService {

  ApssApiUrl: string = "https://servizi.apss.tn.it/opendata/STATOPS001.json";

  

  constructor(public http: HttpClient) { }

  getStatoPS(): Observable<any>{
    return this.http.get<any>(this.ApssApiUrl);
  }
}
