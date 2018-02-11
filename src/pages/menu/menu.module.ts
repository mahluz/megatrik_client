import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImageGalleryLayout1Module } from '../../components/image-gallery/layout-1/image-gallery-layout-1.module';
import { SubImageGalleryModule } from '../../components/sub-image-gallery/sub-image-gallery.module';
import { FullScreenGalleryModule } from '../../components/full-screen-gallery/full-screen-gallery.module';

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    ImageGalleryLayout1Module, 
    SubImageGalleryModule, 
    FullScreenGalleryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuPageModule {}
