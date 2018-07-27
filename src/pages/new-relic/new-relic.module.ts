import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRelicPage } from './new-relic';

@NgModule({
  declarations: [
    NewRelicPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRelicPage),
  ],
})
export class NewRelicPageModule {}
