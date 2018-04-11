import { Component } from '@angular/core';
import { ViewController, ModalController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-course-information',
  templateUrl: 'course-information.html',
})
export class CourseInformationPage {

  course: {courseDivision:string, 
           courseNumber:string, 
           courseTitle: string,
           courseCRN: string,
           courseCredits: string,
           courseMeetingDays: string,
           courseStartTime:string,
           courseEndTime:string,
           courseStartDate: string, 
           courseEndDate: string, 
           courseCity: string, 
           courseBuilding: string, 
           courseRoom: string, 
           courseInstructor: string
          };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.course = navParams.get("course");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseInformationPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
