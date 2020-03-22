import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { firestore, database } from 'firebase';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.css']
})
export class NewcaseComponent implements OnInit {

  newcase = new FormGroup({
    fullname:new FormControl('',[Validators.required]),
    cin:new FormControl('',[Validators.required, Validators.min(8)]),
    sex:new FormControl('1',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    lng:new FormControl('',[Validators.required]),
    lat:new FormControl('',[Validators.required]),
    region:new FormControl('',[Validators.required]),
  })

  requestSent:boolean=false;
  errorMessage="";
  isLoading:boolean=false;
  successMessage="";

  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
  }


  sendDeclaration(e){
    this.isLoading=true;
    var requestdata={};
    try {
      requestdata={
        userinformations:{
          fullname:this.newcase.value.fullname,
          cin:this.newcase.value.cin,
          sex:this.newcase.value.sex,
          age:this.newcase.value.age,
          phone:this.newcase.value.phone,
          region:this.newcase.value.region,
          s1:true,
          s2:true,
          s3:true,
          s4:true,
          s5:true,
          s6:true,
          s7:true,
          
        },
        position: new firestore.GeoPoint( parseFloat(this.newcase.value.lat),parseFloat(this.newcase.value.lng)),
        stat:2,
        addDate: new Date()
      };

      this.db.addNewInfection(requestdata).then((data)=>{
        if (data.id) {
          this.successMessage="Infection ajoutée avec succès.";
          this.requestSent=true;
          this.isLoading=false;
          this.newcase.reset();
        }else{
          this.errorMessage="Une erreur s'est produite lors de l'envoi de votre demande, nous essayons à nouveau.";
          this.isLoading=false;
        }
        
      }).catch((error)=>{
        this.errorMessage="Une erreur s'est produite lors de l'envoi de votre demande, nous essayons à nouveau.";
        this.isLoading=false;
      });
    } catch (error) {
      this.errorMessage="Une erreur s'est produite lors de l'envoi de votre demande, nous essayons à nouveau.";
        this.isLoading=false;
    }



    
  }

}
