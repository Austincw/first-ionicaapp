import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import firebase from 'firebase';
import {ContactPage} from "../pages/contact/contact";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkbXjzG1zg6XDvP7_ndnEU4hCuE0Cyirs",
  authDomain: "personal-app-test.firebaseapp.com",
  databaseURL: "https://personal-app-test.firebaseio.com",
  projectId: "personal-app-test",
  storageBucket: "personal-app-test.appspot.com",
  messagingSenderId: "148558480616"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
