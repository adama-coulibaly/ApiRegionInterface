import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regions } from 'src/app/Models/models/regions.model';
import { RegionsService } from 'src/app/Services/regions.service';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


ObjetRegions : Regions = {
  id_regions: 0,
  nomregions: '',
  coderegion:'',
  activiterregion: '',
  superficieregion:'',
  languemregion:'',
  images:'',
  description:'',
  nombrecommentaire: 0
}




formulaire!:FormGroup
fichier: any;

  contenu?:String;
  lesRegions!:any
  CONTER!:any
  file: any;

  nomRegions: any;
  images: any;
  codeRegions: any;
  langueRegions: any;
  superficie: any;
  activiteRegion: any;
  descriptionRegions: any;
  id_Regions: any;
  id_pays: any;
  messagedeRetour:any
  superficieregion:any


  constructor(private boardService:UserService, private regionService:RegionsService,private formB: FormBuilder) { }

  ngOnInit(): void {

      this.regionService.getRegions().subscribe(data=>{
        this.lesRegions = data
this.CONTER = this.lesRegions.length
        // console.log("this.lesRegions "+this.CONTER)
      })




      this.formulaire = this.formB.group({
        id_regions: ["", Validators.required],
        nomregions: ["", Validators.required],
        file: ["", Validators.required],
        description: ["", Validators.required],
        coderegion: ["", Validators.required],
        id_pays:["",Validators.required],
        languemregion:["",Validators.required],
        superficieregion:["",Validators.required],
        activiterregion:["",Validators.required]
 })

  }


  // ======================================= ICI ON AJOUTE UNE REGION ======================================

  //   CETTE FONCTION S'EN CHARGE DE L'IMAGE
  fileChang(event: any) {
    this.file = event.target.files[0]
    console.log(event)
  }
// POUR VIDER LE FORMULAIRE APRES L'ENVOIS
resetForm(){
  this.id_Regions= ''
  this.nomRegions= ''
  this.codeRegions=''
  this.activiteRegion= ''
  this.superficie=''
  this.langueRegions=''
  this.images=''
  this.descriptionRegions=''
}

  
  CreerRegions(){

  this.id_pays = 1;
  this.nomRegions = this.formulaire!.get("nomregions")!.value;
  this.images = this.formulaire!.get("file")!.value;
  this.codeRegions = this.formulaire!.get("coderegion")!.value;
  this.langueRegions = this.formulaire!.get("languemregion")!.value;
  this.superficie = this.formulaire!.get("superficieregion")!.value;
  this.activiteRegion = this.formulaire!.get("activiterregion")!.value;
  this.descriptionRegions = this.formulaire!.get("description")!.value;


if(this.id_pays != "" && this.nomRegions != "", this.images != "" && this.codeRegions != "" && this.langueRegions != "" && this.superficie!="" && this.activiteRegion !="" && this.descriptionRegions!=""){

   this.regionService.AjouterRegion(this.id_pays,this.nomRegions,this.codeRegions,this.activiteRegion,this.superficie,this.langueRegions,this.descriptionRegions,this.file)
    .subscribe(data=>{
      const RegionEnregistrer = data

      if(RegionEnregistrer.status = true){
       this.messagedeRetour = RegionEnregistrer.message;
      }
      else{
         this.messagedeRetour = RegionEnregistrer.message;
      } 
    })
    this.resetForm();
  }
else{
  this.messagedeRetour ="Veuiller remplir tous les champs !";
}
}









}
