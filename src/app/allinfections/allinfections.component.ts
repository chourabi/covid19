import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-allinfections',
  templateUrl: './allinfections.component.html',
  styleUrls: ['./allinfections.component.css']
})
export class AllinfectionsComponent implements OnInit {

  infections=[];
  aboutToConfirm:any;
  aboutTosuspect:any;
  isLoading:boolean=true;
  searchQuery="";

  constructor(private db:DatabaseService) { }

  ngOnInit(): void {

    
    this.getLatestCases();
  }

  getLatestCases(){
    this.isLoading=true;
    this.db.getInvections().subscribe((data:any)=>{
      this.infections=[];
      data.forEach(infect => {
        
          this.infections.push({
            id:infect.id,
            data:infect.data(),
            
  
          })
        
      });

      this.isLoading=false;
    });
  }

  confirmCase(id){
    this.aboutToConfirm=id;
    
  }

  suspacetCase(id){
    this.db.suspacetCase(id).then((data)=>{

    }).catch((error)=>{

    })
  }

  searchFor(e){
    this.isLoading=true;
    this.db.getInvections().subscribe((data)=>{
      this.infections=[];
      data.forEach(infect => {
        
          if(
           
            infect.data().userinformations.fullname.indexOf(e.target.value.toLowerCase().trim()) != -1
            ||
            ( infect.data().userinformations.cin == e.target.value.toLowerCase().trim())


            ){
              this.infections.push({
                id:infect.id,
                data:infect.data(),
                
      
              })
          }
        
      });

      this.isLoading=false;
    });
  }

  deleteCase(id){
    if (confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CETTE INFECTION ?")) {
      this.db.deleteInfection(id).then((data)=>{

      }).catch((error)=>{
  
      })
    }
  }

  confirmeCaseNow(){
    this.db.confirmCase(this.aboutToConfirm).then((data)=>{

    }).catch((error)=>{

    })
  }

}
