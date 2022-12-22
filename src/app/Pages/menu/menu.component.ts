import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService,private router:Router) { }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  monRole!:any
  monUser:any
  monEmail:any
  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.monRole = this.roles;
      this.monUser = this.tokenStorage.getUser().username;
      this.monEmail = this.tokenStorage.getUser().email;
      console.log("Mon role: "+this.roles)
      console.log("Mon username: "+this.monUser)
      console.log("Mon email: "+this.monEmail)
    }

  }

  // DECONNEXION

 
  logout(): void {
    console.log("Je suis cliquer")
    this.tokenStorage.signOut();
    this.router.navigateByUrl('accueil')
    window.location.reload();

  }

}
