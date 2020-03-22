import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login:new FormControl('',[Validators.email]),
    password:new FormControl('',[Validators.required])
    
  });

  app="COVID-19.TN";
  errorMessage="";
  isLoading=false;

  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }

   loginNow(e){
    this.isLoading=true;
    this.auth.auth.signInWithEmailAndPassword(this.loginForm.value.login,this.loginForm.value.password).then((user)=>{
      this.isLoading=false;
      window.localStorage.setItem('idConnectedUser',user.user.uid);
      this.router.navigate(['rns-admin']);

    }).catch((error)=>{

      switch (error.code) {
        case 'auth/user-not-found':
            this.isLoading=false;
            //console.log(error);
            this.errorMessage="Aucun enregistrement utilisateur ne correspond à cet identifiant. L'utilisateur a peut-être été supprimé.";          
          break;
          case 'auth/wrong-password':
            this.isLoading=false;
            //console.log(error);
            this.errorMessage="Le mot de passe n'est pas valide ou l'utilisateur n'a pas de mot de passe.";          
          break;
      
          
        default:
          this.isLoading=false;
          //console.log(error);
          this.errorMessage="Oups, quelque chose s'est mal passé...";          
        
          break;
      }


      
    })
  }

}
