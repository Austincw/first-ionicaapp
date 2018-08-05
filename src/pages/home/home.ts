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

    // db.collection("about").add({
    //   first_name: "Austin",
    //   last_name: "Washington"
    // }).then((data)=>{
    //   console.log(data)
    // }).catch((error)=>{
    //   console.log(error)
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
