import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.params.data = {
	  'toolBarTitle': 'Big image',
	  'btnNext': 'Next',
	  'btnFinish': 'Finish',
	  'items': [
	      {
	          backgroundImage: 'assets/images/avatar-large/1.jpg',
	          title: 'Fragment Example 1'
	      },
	      {
	          backgroundImage: 'assets/images/avatar-large/2.jpg',
	          title: 'Fragment Example 2'
	      },
	      {
	          backgroundImage: 'assets/images/avatar-large/3.jpg',
	          title: 'Fragment Example 3'
	      }
	  ]
	};
	this.params.events = {
	    'onFinish': function(event: any) {
	        console.log('Finish');
	    }
	};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
