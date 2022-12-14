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
  selector: 'app-tourisme',
  templateUrl: './tourisme.component.html',
  styleUrls: ['./tourisme.component.css']
})
export class TourismeComponent implements OnInit {

  // tour:Tourisme | any;
  constructor() { }

  
  ngOnInit(): void {
  }

tourismes:Tourisme[]= tourismeData;

}
