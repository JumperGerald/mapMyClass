import { Component } from '@angular/core';
import { ViewController, ModalController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage{

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

  courseQuery: {courseTerm: string, courseCRN: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public http: Http) {
    this.courseQuery = {courseTerm: "", courseCRN: ""};
    
    this.http.get('http://localhost:3000/getCourse', {params: {Term: this.courseQuery.courseTerm, CRN: this.courseQuery.courseCRN}}).subscribe( data => {
      console.log(data.json());
      this.course = data.json();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
  }

  closeModal(){
    this.viewCtrl.dismiss(this.course);
  }

  addClass(){
    this.closeModal();
  }
}
