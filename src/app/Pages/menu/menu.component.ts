import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  monRole!:any
  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.monRole = this.roles;
      console.log("Mon role: "+this.roles)
    }

  }

  // DECONNEXION

 
  logout(): void {
    console.log("Je suis cliquer")
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
