import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule, } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChartsModule } from 'ng2-charts';


export const firebaseCongig = environment.firebaseConfig;
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DeclareComponent } from './declare/declare.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InfectedComponent } from './infected/infected.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LatestinfectionsComponent } from './latestinfections/latestinfections.component';
import { AllinfectionsComponent } from './allinfections/allinfections.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { LegalComponent } from './legal/legal.component';
import { StatisticComponent } from './statistic/statistic.component';
import { StatisticmainblockComponent } from './statisticmainblock/statisticmainblock.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DeclareComponent,
    ErrorComponent,
    InfectedComponent,
    AboutComponent,
    AdminComponent,
    LoginComponent,
    LatestinfectionsComponent,
    AllinfectionsComponent,
    NewcaseComponent,
    LegalComponent,
    StatisticComponent,
    StatisticmainblockComponent
  ],
  imports: [
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseCongig),
    AgmCoreModule.forRoot({
      apiKey:environment.google_map_key
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
