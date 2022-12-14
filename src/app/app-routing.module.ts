import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DetailsRegionsComponent } from './Pages/details-regions/details-regions.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import { RegionComponent } from './Pages/region/region.component';
import { TourismeComponent } from './Pages/tourisme/tourisme.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"",redirectTo:"accueil",pathMatch:'full'},
  {path:'accueil', component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'regions', component:RegionComponent},
  {path:'tourisme', component:TourismeComponent},
  {path:'details-regions/:id_regions', component:DetailsRegionsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'text',component:TestComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
