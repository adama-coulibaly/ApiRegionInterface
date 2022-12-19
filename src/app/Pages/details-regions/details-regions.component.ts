import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from 'src/app/Models/models/commentaire';
import { RegionsService } from 'src/app/Services/regions.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-details-regions',
  templateUrl: './details-regions.component.html',
  styleUrls: ['./details-regions.component.css']
})
export class DetailsRegionsComponent implements OnInit {

// COMMENTAIRES 

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  id_user: any;
  monRole: any;

  roles: any;
  monID: any;
  Comm:any;
  Objet:any;
  COMMENTER:any


  constructor(private serviceRegions:RegionsService,private route: ActivatedRoute,private tokenStorage:TokenStorageService) { }
  commentaires: any;
  nbreCommentaire!:any
  UneRegion!:any

  // CommentaireAjt!: FormGroup;  
  objet:any
  description:any


  mesDonnees!:any
  ngOnInit(): void {

      // Permet faire le routage avec notre tirage pour recuperer les postulants tirers
      const id_regions = +this.route.snapshot.params["id_regions"];
      // console.log("ID = "+id_regions)
      this.serviceRegions.detailsRegion(id_regions).subscribe(data=>{
        this.UneRegion = data;
  });



    // CETTE METHODE NOUS PERMET DE RECUPERER LE NOMBRE DES REGIONS

    this.serviceRegions.RegionsCommentaire(id_regions).subscribe(data=>{
      this.commentaires = data;
      this.nbreCommentaire = this.commentaires.length;

      
  })
}

// public comm:Commentaire = new Commentaire();


onSubmit() {

  alert("zertdfgkhjlm")
  this.roles = this.tokenStorage.getUser().id

  this.serviceRegions.FaireCommentaires(this.Objet,this.Comm,this.id_user,this.roles).subscribe(data=>{
    this.COMMENTER = data
  })
}
}

