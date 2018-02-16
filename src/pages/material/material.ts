import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {
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
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 2,
                    "title": "Natasha Gamble",
                    "image": "assets/images/avatar-small/1.jpg",
                    "description": "Birth year: 1980",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 3,
                    "title": "Julia Petersen",
                    "image": "assets/images/avatar-small/2.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 4,
                    "title": "Marisa Cain",
                    "image": "assets/images/avatar-small/3.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 5,
                    "title": "Lara Lynn",
                    "image": "assets/images/avatar-small/4.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 6,
                    "title": "Megan Singleton",
                    "image": "assets/images/avatar-small/5.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 7,
                    "title": "Susanna Simmons",
                    "image": "assets/images/avatar-small/6.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
                },
                {
                    "id": 8,
                    "title": "Juliette Medina",
                    "image": "assets/images/avatar-small/7.jpg",
                    "description": "Birth year: 1984",
                    "shortDescription": "Country: Germany",
                    "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "iconLike": "icon-thumb-up",
                    "iconFavorite": "icon-heart",
                    "iconShare": "icon-share-variant"
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
    console.log('ionViewDidLoad MaterialPage');
  }

}
