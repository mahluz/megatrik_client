import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.params.data = [
        { page: "MenuPage", icon: "md-home" },
        { page: "OrderPage", icon: "md-time" },
        { page: "ProfilePage", icon: "md-person" }
      ];
    this.params.events = {
          'onItemClick': function (item: any) {
                console.log("onItemClick");
          }
      };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
