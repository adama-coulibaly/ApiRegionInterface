import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regions } from '../Models/models/regions.model';


const API_URL = 'http://localhost:8080/projet/odk/Regions/';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http:HttpClient) { }

   getRegions():Observable<Regions[]>{
    return this.http.get<Regions[]>(API_URL+'liste');
  }
}
