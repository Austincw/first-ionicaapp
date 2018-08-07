import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {

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
