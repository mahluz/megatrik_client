import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.params.data = {
      "logo": "assets/images/logo/login-3.png",
      "register": "Service Form",
      "username": "Username",
      "city": "City",
      "country": "Country",
      "password": "Password",
      "email": "Email",
      "button": "submit",
      "skip": "Skip"
    }
    this.params.events = {
      onRegister: function(params) {
          console.log('onRegister');
      },
      onSkip: function(params) {
          console.log('onSkip');
      }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

}
