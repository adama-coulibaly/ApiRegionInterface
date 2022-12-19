import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionsService } from 'src/app/Services/regions.service';

@Component({
  selector: 'app-details-regions',
  templateUrl: './details-regions.component.html',
  styleUrls: ['./details-regions.component.css']
})
export class DetailsRegionsComponent implements OnInit {

  constructor(private serviceRegions:RegionsService,private route: ActivatedRoute) { }

  UneRegion!:any
  ngOnInit(): void {

      // Permet faire le routage avec notre tirage pour recuperer les postulants tirers
      const id_regions = +this.route.snapshot.params["id_regions"];
      console.log("ID = "+id_regions)
      this.serviceRegions.detailsRegion(id_regions).subscribe(data=>{
        this.UneRegion = data;

        // console.log("Donnée "+this.UneRegion)

        // for(let moi of this.UneRegion){
        //   console.log("R= "+moi);
        // }
  });

}
}
