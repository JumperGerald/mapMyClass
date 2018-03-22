import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { AddCoursePage } from '../add-course/add-course'



@Component({
  selector: 'page-my-classes',
  templateUrl: 'my-classes.html',
})
export class MyClassesPage {

  courses: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyClassesPage');
  }

  addCourseModal(){
    console.log("test");
    let courseModal = this.modalCtrl.create(AddCoursePage);
    courseModal.present();
  }

}