import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ToastController, AlertController, LoadingController, Loading } from 'ionic-angular';

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
  loading:Loading;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthServiceProvider,
    private alertCtrl:AlertController,
    private loadingCtrl:LoadingController,
    public toastCtrl: ToastController) {
  	this.params.data = {
     "email": "Email",
      "password": "Password",
      "register": "Register",
      "login": "Login",
      "skip": "Skip",
      "logo": "assets/images/logo/login.png"
    }
    this.params.events = {
        onLogin: function (params) {
            console.log('onLogin:' + JSON.stringify(params));
            // navCtrl.push('TabsPage');
            //loading
            this.loading = loadingCtrl.create({
              content: 'please wait...',
              dismissOnPageChange:true
            });

            this.loading.present();


            auth.login(params).subscribe(allowed=>{
              if(allowed){
                navCtrl.push('TabsPage');
              } else {

                this.loading.dismiss();
                let alert = alertCtrl.create({
                  title:'Fail',
                  subTitle:"Access Denied",
                  buttons:['OK']
                });

                alert.present();

              }

            });
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
