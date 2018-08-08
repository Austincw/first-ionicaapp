import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
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
  private formgroup: FormGroup;
  fnameV: AbstractControl;
  lnameV: AbstractControl;
  emailDataV: AbstractControl;
  messageDataV: AbstractControl;

  constructor(private alertCtrl: AlertController, private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.formgroup = formBuilder.group({
      fnameV: ['', Validators.required],
      lnameV: ['', Validators.required],
      emailDataV: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.minLength(5)])),
      messageDataV: ['', Validators.required]
    });
    this.fnameV = this.formgroup.controls['fnameV'];
    this.lnameV = this.formgroup.controls['lnameV'];
    this.emailDataV = this.formgroup.controls['emailDataV'];
    this.messageDataV = this.formgroup.controls['messageDataV'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  public sumbitContact(){

    let db = firebase.firestore();
    let docName = (this.fname+this.emailData).replace(" ", "");

    db.collection("contact").doc(docName).set({
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
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  public successAlert() {
    let alert = this.alertCtrl.create({
      title: 'Submitted!',
      subTitle: "Thank you for connecting with me, I'll be in touch soon.",
      buttons: ['Ok']
    });
    alert.present();
  }

  // public failAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Oops!',
  //     subTitle: "It seems like you forgot to fill in a field",
  //     buttons: ['Ok']
  //   });
  //   alert.present();
  // }

}
