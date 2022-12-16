import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServicesService } from 'src/app/Services/login-services.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  formGroupe!:FormGroup
  constructor(private loginservice:LoginServicesService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm (){
    this.formGroupe = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  loginPricess(){
    if(this.formGroupe.valid){
      this.loginservice.login(this.formGroupe.value).subscribe(result=>{
        if(result){
          console.log("Contenu "+result);
          alert("Contenu "+result)
        }
      })
    }
    else{
      console.log("Erreur ");
      alert("Contenu ")
    }
    
  }

}
