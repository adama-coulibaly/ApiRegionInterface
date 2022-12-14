import { Component, OnInit } from '@angular/core';
import tourismeData from '../../tourisme.json';

interface Tourisme{
  id:number;
  lieu:String;
  image:String;
  description:String;
  lien:String;
}
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }


getDonnee:Tourisme[]=tourismeData;

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


}
