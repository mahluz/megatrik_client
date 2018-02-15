import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.params.data = {
        "iconLike": "icon-thumb-up",
        "iconFavorite": "icon-heart",
        "iconShare": "icon-share-variant",
        "title": "Creative Studio Form",
        "titleDescription": "Design & Development agency",
        "contentTitle": "About us",
        "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
                              Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? \
                              In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; \
                              Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
        "iconLoacation": "icon-map-marker-radius",
        "iconLoacationText": "Design Street, New York, USA",
        "iconWatch": "icon-alarm",
        "iconWatchText": "8:00 to 16:00 working days",
        "iconPhone": "icon-phone",
        "iconPhoneText": "333 222 111",
        "iconEarth": "icon-earth",
        "iconEarthText": "www.csform.com",
        "iconEmail": "icon-email-outline",
        "iconEmailText": "dev@csform.com",
        "titleMap": "Here we are :",
        "map": {
            "lat": 40.712562,
            "lng": -74.005911,
            "zoom": 15,
            "mapTypeControl": true,
            "streetViewControl": true
        }
    };
    this.params.events = {
	      'onLike': function (item: any) {
	          console.log("Like");
	      },
	      'onFavorite': function (item: any) {
	            item.favorite = !item.favorite;
	          console.log("Favorite");
	      },
	      'onShare': function (item: any) {
	          console.log("Share");
	      },
	  };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
