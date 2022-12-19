import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../Models/models/commentaire';
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

//  Recuperation d'une seule REGIONS
  detailsRegion(id_regions:number):Observable<any>{
    console.log("Mon ID "+id_regions)
    return this.http.get<any>(`http://localhost:8080/projet/odk/Regions/uneRegion/${id_regions}`)
  }
  //LES COMMENTAIRES D'UNE REGION
  
  RegionsCommentaire(id_regions:number):Observable<any>{
    console.log("Mon ID REGIONS "+id_regions)
    return this.http.get(`http://localhost:8080/projet/odk/Commentaire/RegionsCommentaire/${id_regions}`);
  }

  // FAIRE UN COMMENTAIRES

  FaireCommentaires(objet:any,description:any,id:any,id_regions:any):Observable<any>{
const data:FormData=new FormData();
let comm = [
  {
    "objet":objet,
   "description":description,
   "user":{
       "id":id
   },
   "regions":{
       "id_regions":id_regions,
   }
}
];
data.append('data',JSON.stringify(comm).slice(1,JSON.stringify(comm).lastIndexOf(']')));

    return this.http.post(`http://localhost:8080/projet/odk/Commentaire/creer`,data);
  }



}
