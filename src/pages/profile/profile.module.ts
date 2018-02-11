import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ParallaxLayout3Module} from '../../components/parallax/layout-3/parallax-layout-3.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  	ParallaxLayout3Module
  ],
  	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePageModule {}
