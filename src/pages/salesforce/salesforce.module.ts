import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesforcePage } from './salesforce';

@NgModule({
  declarations: [
    SalesforcePage,
  ],
  imports: [
    IonicPageModule.forChild(SalesforcePage),
  ],
})
export class SalesforcePageModule {}
