import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    let db = firebase.firestore();

    // db.collection("about").get({
    //   first_name: "Austin",
    //   last_name: "Washington"
    // }).then((data)=>{
    //   console.log(data)
    // }).catch((error)=>{
    //   console.log(error)
    // });

    var exp = db.collection("about").doc("work_experience").collection("salesforce").doc("sf");

    exp.get().then(function (doc) {
      // for(let temp in doc.data()){
      //   console.log(temp);
      // }
      console.log(doc.data());
    });



    // db.collection("about").get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });


  }

  public tagModal(){
    let modal = this.modalCtrl.create('TagPage');
    modal.present();
  }
  public nrmodal(){
    let modal = this.modalCtrl.create('NewRelicPage');
    modal.present();
  }
  public sfmodal(){
    let modal = this.modalCtrl.create('SalesforcePage');
    modal.present();
  }

}
