import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  params:any={};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.params.data = {
     "username": "Username",
      "password": "Password",
      "register": "Register",
      "login": "Login",
      "skip": "Skip",
      "logo": "assets/images/logo/login.png"
    }
    this.params.events = {
        onLogin: function (params) {
            console.log('onLogin:' + JSON.stringify(params));
            navCtrl.push('TabsPage');
        },
        onRegister: function (params) {
            console.log('onRegister:' + JSON.stringify(params));
        },
        onSkip: function (params) {
            console.log('onSkip:' + JSON.stringify(params));
        },
        onFacebook: function (params) {
            console.log('onFacebook:' + JSON.stringify(params));
        },
        onTwitter: function (params) {
            console.log('onTwitter:' + JSON.stringify(params));
        },
        onGoogle: function (params) {
            console.log('onGoogle:' + JSON.stringify(params));
        },
        onPinterest: function (params) {
            console.log('onPinterest:' + JSON.stringify(params));
        },
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
