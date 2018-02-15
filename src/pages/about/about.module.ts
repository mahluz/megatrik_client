import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapsLayout2Module } from '../../components/maps/layout-2/maps-layout-2.module';		

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  	MapsLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutPageModule {}
