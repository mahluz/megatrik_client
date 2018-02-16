import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpPage } from './help';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WizardLayout2Module } from '../../components/wizard/layout-2/wizard-layout-2.module';

@NgModule({
  declarations: [
    HelpPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpPage),
  	WizardLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpPageModule {}
