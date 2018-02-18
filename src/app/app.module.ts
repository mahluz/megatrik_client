import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { IonicStorageModule, Storage } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
    declarations: [
        MyApp,
        ],
    providers: [
        BarcodeScanner, StatusBar, SplashScreen,
        ToastService, LoadingService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
        AngularFireDatabaseModule, AngularFireAuthModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
