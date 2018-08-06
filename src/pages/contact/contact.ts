import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import firebase from 'firebase';
import 'firebase/firestore';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  public fname:string;
  public lname:string;
  public emailData:string;
  public messageData:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  public sumbitContact(){

    let db = firebase.firestore();
    let docname = (this.fname+this.emailData).replace(" ", "");

    db.collection("contact").doc(docname).set({
      firstname: this.fname,
      lastname: this.lname,
      email: this.emailData,
      message: this.messageData
    }).then((data) => {
    }).catch((error) => {
      console.log(error);
    });

    this.clearFields();
    this.successAlert();

  }

  public clearFields(){
    this.fname = "";
    this.lname = "";
    this.emailData = "";
    this.messageData = "";
  }

  public successAlert() {
    let alert = this.alertCtrl.create({
      title: 'Submitted!',
      subTitle: "Thank you for connecting with me, I'll be in touch soon.",
      buttons: ['Ok']
    });
    alert.present();
  }

  public failAlert() {
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: "It seems like you forgot to fill in a field",
      buttons: ['Ok']
    });
    alert.present();
  }

}
