import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {


  constructor(private http : HttpClient) { }

  // ICI ON CREE NOTRE METHODE DE
  login(data: any):Observable<any>{
    return this.http.post(`http://localhost:8080/login/`,data);
  }
}
