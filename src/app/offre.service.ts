import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/assets/model';
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }

  getAllOffres():Observable<Offre[]>{
    return this.http.get<Offre[]>("assets/data.json");
  }
}
