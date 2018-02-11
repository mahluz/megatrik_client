import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterLayout2Module } from '../../components/register/layout-2/register-layout-2.module';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    RegisterLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupPageModule {}
