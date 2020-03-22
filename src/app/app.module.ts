import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChartsModule } from 'ng2-charts';

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
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCzxwXVdIZ76739pNkyz-V-itOwykKFblg",
      authDomain: "covid-19-tn.firebaseapp.com",
      databaseURL: "https://covid-19-tn.firebaseio.com",
      projectId: "covid-19-tn",
      storageBucket: "covid-19-tn.appspot.com",
      messagingSenderId: "197724184793",
      appId: "1:197724184793:web:3f68c0ded08f890f1adec8",
      measurementId: "G-NY1C77JVFD"
    }),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
