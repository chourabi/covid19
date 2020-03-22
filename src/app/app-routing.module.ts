import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { DeclareComponent } from './declare/declare.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { LatestinfectionsComponent } from './latestinfections/latestinfections.component';
import { AllinfectionsComponent } from './allinfections/allinfections.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { LegalComponent } from './legal/legal.component';
import { StatisticComponent } from './statistic/statistic.component';
import { StatisticmainblockComponent } from './statisticmainblock/statisticmainblock.component';


const routes: Routes = [
  { path:'' , component:MapComponent },
  { path:'declaration' , component:DeclareComponent },
  { path:'infected/:id' , component:DeclareComponent },
  { path:'about' , component:AboutComponent },
  { path:'termsofuse' , component:LegalComponent },
  { path:'statistic' , component:StatisticmainblockComponent },
  
  
  { path:'rns-login' , component:LoginComponent },
  { path:'rns-admin' , component: AdminComponent, children:[
    { path:'' ,component:LatestinfectionsComponent },
    { path:'infections' ,component:LatestinfectionsComponent },
    { path:'allinfections' ,component:AllinfectionsComponent },
    { path:'newcase' ,component:NewcaseComponent },
    
    
    

  ] , canActivate:[AuthGuard] },
  
  { path:'**' , redirectTo:'/' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
