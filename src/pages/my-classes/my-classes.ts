import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Http } from '@angular/http';

import { AddCoursePage } from '../add-course/add-course';
import { CourseInformationPage } from '../course-information/course-information';



@Component({
  selector: 'page-my-classes',
  templateUrl: 'my-classes.html',
})
export class MyClassesPage {

  courses: Array<{courseDivision:"", 
                  courseNumber:"", 
                  courseTitle: "",
                  courseCRN: "",
                  courseCredits: "",
                  courseMeetingDays: "",
                  courseStartTime:"",
                  courseEndTime:"",
                  courseStartDate: "", 
                  courseEndDate: "", 
                  courseCity: "", 
                  courseBuilding: "", 
                  courseRoom: "", 
                  courseInstructor: ""
                }>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.getCourses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyClassesPage');
  }

  getCourses(){
    if (localStorage.getItem('courses')){
      this.courses = JSON.parse(localStorage.getItem('courses'));
    } else {
      this.courses = [];
    }
  }

  setCourses(){
    localStorage.setItem('courses', JSON.stringify(this.courses));
  }

  addCourseModal(){
    let courseModal = this.modalCtrl.create(AddCoursePage);
    courseModal.onDidDismiss(data => {
      this.courses.push(data);
      this.setCourses();
    })
    courseModal.present();
  }

  showCourseInformation(data){
    let courseModal= this.modalCtrl.create(CourseInformationPage, {"course": data});
    courseModal.onDidDismiss(data =>{
    })
    courseModal.present();
  }

}