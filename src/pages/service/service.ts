import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
	params={};
  services:any;
  order={};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthServiceProvider) {

    auth.getService().subscribe(service=>{
      this.services = service;
      console.log(this.services);
    });

  	this.params = {
      "logo": "assets/images/logo/login-3.png",
      "register": "Submit",
      "username": "Username",
      "province": "Province",
      "regency": "Regency",
      "district":"District",
      "village":"Village",
      "password": "Password",
      "email": "Email",
      "service":"service",
      "button": "submit",
      "skip": "Skip"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

}
