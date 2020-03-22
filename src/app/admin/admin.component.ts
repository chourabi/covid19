import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }


  logOut(){
    if (confirm("VOULEZ-VOUS vraiment vous déconnecter de cette session?")) {
      this.auth.auth.signOut().then(()=>{
        window.localStorage.removeItem('idConnectedUser');
        this.router.navigate(['/rns-login'])
      })
    }

  }

}
