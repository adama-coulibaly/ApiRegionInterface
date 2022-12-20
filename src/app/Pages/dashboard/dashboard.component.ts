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
  id_Pays!: any;


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

      console.log("Regions adama :"+this.formulaire.value)
  }

  // ======================================= ICI ON AJOUTE UNE REGION ======================================

  fileChang(event: any) {
    this.file = event.target.files[0]
    console.log(event)
  }
  
  CreerRegions(){

  this.id_Pays = 1;
  this.nomRegions = this.formulaire!.get("nomregions")!.value;
  this.images = this.formulaire!.get("file")!.value;
  this.codeRegions = this.formulaire!.get("coderegion")!.value;
  this.langueRegions = this.formulaire!.get("languemregion")!.value;
  this.superficie = this.formulaire!.get("superficieregion")!.value;
  this.activiteRegion = this.formulaire!.get("activiterregion")!.value;
  this.descriptionRegions = this.formulaire!.get("description")!.value;

  console.log("ID: "+this.id_Regions+" Nom: " +this.nomRegions+"Images: " +this.images+"Code: " +this.codeRegions+"Superf: " +this.superficie+"Activite: " +this.activiteRegion+"Descr: " +this.descriptionRegions);

   this.regionService.AjouterRegion(this.id_Pays,this.nomRegions,this.codeRegions,this.activiteRegion,this.superficie,this.langueRegions,this.descriptionRegions,this.file)
    .subscribe(data=>{
      const RegionEnregistrer = data
      console.log("================= "+RegionEnregistrer)
    })
  }



}
