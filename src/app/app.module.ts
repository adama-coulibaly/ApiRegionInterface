import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import { RegionComponent } from './Pages/region/region.component';
import { DetailsRegionsComponent } from './Pages/details-regions/details-regions.component';
import { TourismeComponent } from './Pages/tourisme/tourisme.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { TestComponent } from './test/test.component';
import { NgPipesModule } from 'ngx-pipes';
import { DashboardDirective } from './Services/dashboard.directive';
import { FooterComponent } from './Pages/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AccueilComponent,
    ConnexionComponent,
    RegionComponent,
    DetailsRegionsComponent,
    TourismeComponent,
    DashboardComponent,
    MenuComponent,
    TestComponent,
    DashboardDirective,
    FooterComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
