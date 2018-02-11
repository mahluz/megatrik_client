import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.params.data = {
      "logo": "assets/images/logo/login-2.png",
      "iconAccount": "icon-account",
      "username": "Username",
      "iconHome": "icon-home-variant",
      "iconCity": "icon-city",
      "city": "City",
      "iconWeb": "icon-web",
      "country": "Country",
      "iconLock": "icon-lock",
      "password": "Password",
      "iconEmail": "icon-email-outline",
      "email": "Email",
      "submit": "submit",
      "skip": "Skip"
    }
    this.params.events = {
      onRegister: function(params) {
            console.log('onRegister');
      },
      onSkip: function(params) {
          console.log('onSkip');
      }
	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
