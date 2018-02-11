import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.params.data = {
        "title": "PlaylistName",
            "description": "Author:Username",
            "duration": "35:72",
            "items": [
                {
                    "id": 1,
                    "title": "Jessica Miles",
                    "image": "assets/images/avatar-small/0.jpg",
                    "description": "Service date: 12 January 2017",
                    "shortDescription": "Service type : Electricity Repair",
                    "longDescription": "Address : Sekar Gading Blok Q No. 9 Semarang",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-thumb-down"
                },
                {
                    "id": 2,
                    "title": "Natasha Gamble",
                    "image": "assets/images/avatar-small/1.jpg",
                    "description": "Service date: 12 January 2017",
                    "shortDescription": "Service type : Electricity Repair",
                    "longDescription": "Address : Sekar Gading Blok Q No. 9 Semarang",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-thumb-down"
                }
            ]
      }
      this.params.events = {
      'onItemClick': function (item: any) {
              this.toastCtrl.presentToast(item);
        },
        'onExplore': function (item: any) {
              this.toastCtrl.presentToast("Explore");
        },
        'onShare': function (item: any) {
              this.toastCtrl.presentToast("Share");
        },
        'onLike': function (item: any) {
              this.toastCtrl.presentToast("onLike");
        },
        'onFavorite': function (item: any) {
              this.toastCtrl.presentToast("onFavorite");
        },
        'onFab': function (item: any) {
              this.toastCtrl.presentToast("Fab");
        },
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
