import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterLayout1Module } from '../../components/register/layout-1/register-layout-1.module';
import { IonicPageModule } from 'ionic-angular';
import { ServicePage } from './service';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    ServicePage,
  ],
  imports: [
    IonicPageModule.forChild(ServicePage),
  	RegisterLayout1Module
  ],
  providers:[
  	GoogleMaps
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicePageModule {}
