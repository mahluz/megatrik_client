import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]

})
export class HomePage {

  data: any = {};
  params:any = {};
  constructor(public navCtrl: NavController, public service: HomeService) { 
    // service.load().subscribe(snapshot => {
    //   this.data = snapshot;
    // });
    this.params.data = {
            "duration": 10000,
            "backgroundImage": 'assets/images/background/29.jpg',
            "logo": 'assets/images/logo/login.png',
            "title": ""
        };
    this.params.events = {
          "onRedirect": function () {
              navCtrl.push("LoginPage");
          }
      };

  }

  login(){
    // without lazy loading
  	this.navCtrl.push(LoginPage);
  }
  signup(){
    // lazy loading
    this.navCtrl.push('SignupPage');
  }

}
