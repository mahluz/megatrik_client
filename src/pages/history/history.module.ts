import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleCardLayout1Module } from '../../components/list-view/google-card/layout-1/google-card-layout-1.module';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
    GoogleCardLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HistoryPageModule {}
