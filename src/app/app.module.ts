import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyClassesPage } from '../pages/my-classes/my-classes';
import { ListPage } from '../pages/list/list';
import { AddCoursePage } from '../pages/add-course/add-course';
import { CourseInformationPage } from '../pages/course-information/course-information';

import { sideMenuTabsPage } from '../pages/sideMenuTabs/sideMenuTabs'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyClassesPage,
    AddCoursePage,
    CourseInformationPage,
    sideMenuTabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyClassesPage,
    AddCoursePage,
    CourseInformationPage,
    sideMenuTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
