import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Models/models/commentaire';
import { Regions } from 'src/app/Models/models/regions.model';
import { RegionsService } from 'src/app/Services/regions.service';
import { UserService } from 'src/app/Services/user-service.service';



@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  page = 1;

  searchText:any


  content?: string;
  lesRegion!:any
  commentaires!:any

  constructor(private userService: UserService,private regionsServices:RegionsService) { }

  ngOnInit(): void {

// CETTE METHODE NOUS PERMET DE RECUPERER LES REGIONS

    this.regionsServices.getRegions().subscribe(data=>{
      this.lesRegion = data
      console.log("NOS REGIONS "+this.lesRegion)
    });


  }
}
