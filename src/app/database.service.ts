import { Injectable } from '@angular/core';
import { FirebaseFirestore } from '@angular/fire';
import { Observable, Observer } from 'rxjs';
import { AngularFirestore, DocumentChangeAction, DocumentReference, QuerySnapshot, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore:AngularFirestore) { 
    
  }


  getInvections(): Observable<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>{
      return this.firestore.collection('infections',ref=>ref.orderBy('addDate','desc') ).get();
  }

  getNewInvections(): Observable<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>{
    return this.firestore.collection('infections',ref=>ref.orderBy('addDate','desc') ).get();
}

  addNewInfection(data):Promise<DocumentReference>{
    return this.firestore.collection('infections').add(data);
  }

  search():Observable<QuerySnapshot<DocumentData>>{
    return this.firestore.collection('infections',ref=>ref.orderBy('addDate','desc') ).get();
  }

  confirmCase(id):Promise<any>{
    return this.firestore.collection('infections').doc(id).update({
      stat:2
    });
  }

  suspacetCase(id){
    return this.firestore.collection('infections').doc(id).update({
      stat:1
    });
  }


  deleteInfection(id){
    return this.firestore.collection('infections').doc(id).delete();
  }

  getMoreInformation(){
    return this.firestore.collection('additional').doc('').get();
  }

}
