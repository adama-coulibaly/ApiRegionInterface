import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import { RegionComponent } from './Pages/region/region.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'regions', component:RegionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
