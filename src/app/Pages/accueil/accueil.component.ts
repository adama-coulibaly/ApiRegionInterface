import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // images = [
  //   {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
  //   {'image': 'https://picsum.photos/seed/picsum/1200/300'},
  //   {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
  //   {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
  //   {'image': 'https://picsum.photos/seed/picsum/1200/300'}
  // ];

}
