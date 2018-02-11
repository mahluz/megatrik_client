import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPage } from './order';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
   import { AppearanceAnimationLayout5Module } from '../../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';

@NgModule({
  declarations: [
    OrderPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPage),
    AppearanceAnimationLayout5Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderPageModule {}
