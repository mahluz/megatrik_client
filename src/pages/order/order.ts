import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  		this.params.data = {
        "items" : [ {
          "favorite" : true,
          "id" : 1,
          "image" : "assets/images/avatar/0.jpg",
          "title" : "Isaac Raid"
        }, {
          "favorite" : false,
          "id" : 2,
          "image" : "assets/images/avatar/1.jpg",
          "title" : "Jason Graham"
        }, {
          "favorite" : true,
          "id" : 3,
          "image" : "assets/images/avatar/2.jpg",
          "title" : "Abigail Ross"
        }, {
          "favorite" : false,
          "id" : 4,
          "image" : "assets/images/avatar/3.jpg",
          "title" : "Justin Rutherford"
        }, {
          "favorite" : false,
          "id" : 5,
          "image" : "assets/images/avatar/4.jpg",
          "title" : "Nicholas Henderson"
        }, {
          "favorite" : true,
          "id" : 6,
          "image" : "assets/images/avatar/5.jpg",
          "title" : "Elizabeth Mackenzie"
        }, {
          "favorite" : false,
          "id" : 7,
          "image" : "assets/images/avatar/6.jpg",
          "title" : "Melanie Ferguson"
        }, {
          "favorite" : true,
          "id" : 8,
          "image" : "assets/images/avatar/7.jpg",
          "title" : "Fiona Kelly"
        }, {
          "favorite" : true,
          "id" : 9,
          "image" : "assets/images/avatar/8.jpg",
          "title" : "Nicholas King"
        }, {
          "favorite" : true,
          "id" : 10,
          "image" : "assets/images/avatar/9.jpg",
          "title" : "Victoria Mitchell"
        }, {
          "favorite" : false,
          "id" : 11,
          "image" : "assets/images/avatar/10.jpg",
          "title" : "Sophie Lyman"
        }, {
          "favorite" : false,
          "id" : 12,
          "image" : "assets/images/avatar/11.jpg",
          "title" : "Carl Ince"
        }, {
          "favorite" : false,
          "id" : 13,
          "image" : "assets/images/avatar/12.jpg",
          "title" : "Michelle Slater"
        }, {
          "favorite" : false,
          "id" : 14,
          "image" : "assets/images/avatar/13.jpg",
          "title" : "Ryan Mathis"
        }, {
          "favorite" : false,
          "id" : 15,
          "image" : "assets/images/avatar/14.jpg",
          "title" : "Julia Grant"
        }, {
          "favorite" : false,
          "id" : 16,
          "image" : "assets/images/avatar/15.jpg",
          "title" : "Hannah Martin"
        } ]
      }

      this.params.events = {
        'onItemClick': function(item: any) {
            console.log("onItemClick");
            let actionSheet = actionSheetCtrl.create({
              title: 'Modify your album',
              buttons: [
                {
                  text: 'Destructive',
                  role: 'destructive',
                  handler: () => {
                    console.log('Destructive clicked');
                  }
                },{
                  text: 'Archive',
                  handler: () => {
                    console.log('Archive clicked');
                  }
                },{
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                }
              ]
            });
            actionSheet.present();
        },
        'onFavorite': function(item) {
            item.favorite = !item.favorite;
            console.log("onFavorite");
        },
        'onFab':function(item:any){
        	console.log("Fab");
          navCtrl.push('HistoryPage');
        }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
