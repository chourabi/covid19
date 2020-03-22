import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-latestinfections',
  templateUrl: './latestinfections.component.html',
  styleUrls: ['./latestinfections.component.css']
})
export class LatestinfectionsComponent implements OnInit {

  infections=[];
  aboutToConfirm:any;
  aboutTosuspect:any;
  isLoading:boolean=true;

  constructor(private db:DatabaseService) { }

  ngOnInit(): void {

    
    this.getLatestCases();
  }

  getLatestCases(){
    this.isLoading=true;
    this.db.getNewInvections().subscribe((data)=>{
      this.infections=[];
      data.forEach(infect => {
        if (infect.data().stat==0) {
          this.infections.push({
            id:infect.id,
            data:infect.data(),
            
  
          })
        }
      });

      this.isLoading=false;
    });
  }

  confirmCase(id){
    //console.log(id);
    this.aboutToConfirm=id;
    
  }

  suspacetCase(id){
    this.db.suspacetCase(id).then((data)=>{

    }).catch((error)=>{

    })
  }


  

  confirmeCaseNow(){
    this.db.confirmCase(this.aboutToConfirm).then((data)=>{

    }).catch((error)=>{

    })
  }

}
