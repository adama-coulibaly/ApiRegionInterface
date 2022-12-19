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

  // Recuperation de toute les Regions
   getRegions():Observable<any>{
    return this.http.get(API_URL+'liste');
  }

//  Recuperation d'une seule images
  detailsRegion(id_regions:number):Observable<any>{
    console.log("Mon ID "+id_regions)
    return this.http.get<any>(`http://localhost:8080/projet/odk/Regions/uneRegion/${id_regions}`)
  }



}
