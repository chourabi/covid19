import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { firestore } from 'firebase';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-declare',
  templateUrl: './declare.component.html',
  styleUrls: ['./declare.component.css']
})
export class DeclareComponent implements OnInit {

  declaration = new FormGroup({
    fullname:new FormControl('',[Validators.required]),
    sex:new FormControl('1',[Validators.required]),
    region: new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.min(8)]),
    s1:new FormControl(false,[]),
    s2:new FormControl(false,[]),
    s3:new FormControl(false,[]),
    s4:new FormControl(false,[]),
    s5:new FormControl(false,[]),
    s6:new FormControl(false,[]),

  })

  lat:number;
  lng:number;
  imgsrc:string="https://firebasestorage.googleapis.com/v0/b/covid-19-tn.appspot.com/o/assets%2Floader.gif?alt=media&token=6f5e31d4-8d9c-4fe2-93d3-9b396f0be63e";

  locationIsAllowed:boolean;
  messageLoader="Nous envoyons votre demande au ministre de la santé, soyez fort";
  requestIsSent:boolean=false;
  isLoading:boolean=false;

  constructor(private db:DatabaseService) { 
    navigator.permissions.query({name:'geolocation'})
  .then(function(permissionStatus) {
    //console.log('geolocation permission state is ', permissionStatus.state);

    permissionStatus.onchange = function() {
      //console.log('geolocation permission state has changed to ', this.state);
    };
  });
  }

  ngOnInit(): void {
  }

  sendDeclaration(e){
    let requestdata={
      userinformations:this.declaration.value,
      position: new firestore.GeoPoint(this.lat,this.lng),
      stat:0,
      addDate: new Date()
    }

    
    this.isLoading=true;
    this.db.addNewInfection(requestdata).then((data)=>{
      if (data.id) {
        this.messageLoader="Votre demande est envoyée avec succès, nous redirigeons votre demande vers l'urgence la plus proche.";
        this.requestIsSent=true;
        this.imgsrc="https://firebasestorage.googleapis.com/v0/b/covid-19-tn.appspot.com/o/assets%2Fsent.png?alt=media&token=4ce5e21b-d09a-43d3-90e1-c01a7b250933";
      }else{
        this.messageLoader="Une erreur s'est produite lors de l'envoi de votre demande, nous essayons à nouveau.";
        this.sendDeclaration(requestdata);
      }
      
    }).catch((error)=>{
      this.messageLoader="Une erreur s'est produite lors de l'envoi de votre demande, nous essayons à nouveau.";
      this.sendDeclaration(requestdata);
    });
    
    
    
  }


  getUserLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>{
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
        this.locationIsAllowed=true;
      },(error)=>{
        alert("Quelque chose s'est mal passé en essayant de vous localiser");
      });
    }else{
      alert("Désolé mais votre appareil ne prend pas en charge cette fonctionnalité.")
      
      this.locationIsAllowed=false;
    }
  }
}
