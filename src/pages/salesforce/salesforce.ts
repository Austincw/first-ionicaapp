import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import firebase from 'firebase';
import 'firebase/firestore';

/**
 * Generated class for the SalesforcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salesforce',
  templateUrl: 'salesforce.html',
})
export class SalesforcePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    let db = firebase.firestore();

    db.collection("work_experience").get().then(function(snapshot) {
      snapshot.forEach(function (doc) {

        let my_list = [];
        if(doc.id == "salesforce") {
          my_list = doc.get("data");
        }

        let ion_list = document.createElement("ul");
        let element = document.getElementById("list");
        for(let item in my_list){
          let ion_item = document.createElement("li");
          ion_item.innerHTML = my_list[item];
          ion_list.appendChild(ion_item);

        }
        element.appendChild(ion_list);

      });
        // doc.data() is never undefined for query doc snapshots
    }).catch(function (error) {
      console.log("Error getting documents" + error);
    });

  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesforcePage');
  }

}
