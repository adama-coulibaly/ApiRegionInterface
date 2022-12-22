import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReversePipe } from 'ngx-pipes/public_api';
import { Commentaire } from 'src/app/Models/models/commentaire';
import { Regions } from 'src/app/Models/models/regions.model';
import { RegionsService } from 'src/app/Services/regions.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-details-regions',
  templateUrl: './details-regions.component.html',
  styleUrls: ['./details-regions.component.css']
})

export class DetailsRegionsComponent implements OnInit  {

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
  valide!: string;
  habitation: any;


  constructor(private serviceRegions:RegionsService,private route: ActivatedRoute,private tokenStorage:TokenStorageService) { }
  
pages=1
  commentaires: any;
  nbreCommentaire!:any
  UneRegion!:any

  // CommentaireAjt!: FormGroup;  
  objet:any
  description:any


  commentaire:Commentaire = {
    // objet: '',
    description: '',
    id_regions: null,
    
    id_users: null,
    idcommentaire: null
  }
  invalide!:String //POUR LES ERREURS DE MESSAGES
  statut!:boolean
  mesDonnees!:any
  ngOnInit(): void {
    // this.statut = true
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
  });

  // ICI ON RECUPER LES HABITANTS D'UNE REGION SPECIFIQUE
  
  this.serviceRegions.lesHABITANTS(id_regions).subscribe(data=>{
    this.habitation = data
  })
}

// public comm:Commentaire = new Commentaire();


onSubmit() {

   
const id_Regions = +this.route.snapshot.params["id_regions"]; // RECUPERATION DE ID REGIONS
this.id_user = this.tokenStorage.getUser().id

  this.commentaire.id_regions = id_Regions;
  this.commentaire.id_users = this.id_user;

  if(this.commentaire.id_users == null){
    
    this.statut = true
    this.invalide = "Veuiller vous  connecter";
  }
  else if(this.commentaire.description == ""){
    this.statut = true
    this.invalide = "Veuiller ecrire un message !";
    
  }
  else{
    // this.statut = false
    this.valide = "Message envoyé avec succès";
      this.serviceRegions.FaireCommentaires(this.commentaire).subscribe(data=>{
    this.COMMENTER = data
  });
  window.location.reload()
  } 
}

}

