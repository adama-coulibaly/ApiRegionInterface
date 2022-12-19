import { Component, OnInit } from '@angular/core';
import { RegionsService } from 'src/app/Services/regions.service';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contenu?:String;
  lesRegions!:any
  constructor(private boardService:UserService, private regionService:RegionsService) { }

  ngOnInit(): void {

      this.regionService.getRegions().subscribe(data=>{
        this.lesRegions = data

        console.log(this.lesRegions)
      })


    // this.boardService.getAdminBoard().subscribe(data=>{
    //     this.contenu = data
    //     console.log("Je suis admin "+this.contenu);
    // },
    // err=>{
    //   this.contenu = JSON.parse(err.error).message
      
    // }
    // )
  }

}
