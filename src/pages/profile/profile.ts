import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.params.data = { 
    		"headerImage": "assets/images/background/2.jpg",
            "avatar": "assets/images/avatar/0.jpg",
            "items": [
                {
                    "id": 1,
                    "title": "Logout",
                    "image": "http://www.free-icons-download.net/images/logout-log-out-icon-30024.png",
                    "icon": "icon-heart-outline",
                    "favorite": false
                }
        		]
  			}
  this.params.events = {
   'onFavorite': function (item: any) {
          item.favorite = !item.favorite;
          this.toastCtrl.presentToast("Favorite");
      },
      'onItemClick': function (item: any) {
            console.log(item.title);
      },
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
