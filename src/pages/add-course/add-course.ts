import { Component } from '@angular/core';
import { ViewController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage{

  course: Array<{courseTitle: string, CRN: string}>
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.course = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  addClass(){
    
    this.closeModal();
  }
}
