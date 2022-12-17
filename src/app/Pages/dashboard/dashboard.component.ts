import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contenu?:String;
  constructor(private boardService:UserService) { }

  ngOnInit(): void {
    this.boardService.getAdminBoard().subscribe(data=>{
        this.contenu = data
        console.log("Je suis admin "+this.contenu);
    },
    err=>{
      this.contenu = JSON.parse(err.error).message
      
    }
    )
  }

}
