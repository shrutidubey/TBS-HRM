import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ManagerdashboardComponent } from './components/managerdashboard/managerdashboard.component';

import { ManageemployeesComponent } from './components/manageemployees/manageemployees.component';
import { EventsComponent } from './components/events/events.component';
import { LeaveComponent } from './components/leave/leave.component';
import { AdminleaveComponent } from './components/adminleave/adminleave.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { ManagerleaveComponent } from './components/managerleave/managerleave.component';
import { ManagerempComponent } from './components/manageremp/manageremp.component';
import { PendingleavesComponent } from './components/pendingleaves/pendingleaves.component';
//import { HolidayComponent } from './components/holiday/holiday.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
//import { HolidayComponent } from './components/holiday/holiday.component';


const appRoutes:Routes = [

  {
    path:'',component:HomeComponent
  },

  {
    path:'register',component:RegisterComponent
  },

  {
    path:'login',component:LoginComponent
  },


  {
    path:'dashboard',component:DashboardComponent
  },


  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'admindashboard',component:AdmindashboardComponent
  },
  {
    path:'manageemployees',component:ManageemployeesComponent
  },
  {
    path:'manageevents',component:EventsComponent
  },
  {
    path:'manageleaves',component:LeaveComponent
  },
  {
    path:'adminleave',component:AdminleaveComponent
  },
  {
    path:'editprofile',component:EditprofileComponent
  },
  {
    path:'managerdashboard',component:ManagerdashboardComponent
  },
  {
    path:'app-dashboard',component:AppDashboardComponent
  },
  {
    path:'managerleave',component:ManagerleaveComponent
  },
  {
    path:'manageremp',component:ManagerempComponent
  },
  {
    path:'pendingleaves',component:PendingleavesComponent
  },
 /* {
    path:'manageholidays',component:HolidayComponent
  },*/
  {
    path:'holidays',component:HolidaysComponent
  }
  
]





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AdmindashboardComponent,
    ManagerdashboardComponent,
    ManageemployeesComponent,
    EventsComponent,
    LeaveComponent,
    AdminleaveComponent,
    EditprofileComponent,
    AppDashboardComponent,
    ManagerleaveComponent,
    ManagerempComponent,
    PendingleavesComponent,
    //HolidayComponent,
    HolidaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
