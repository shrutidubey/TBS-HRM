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
import { VieweventsComponent } from './components/viewevents/viewevents.component';
import { ViewholidaysComponent } from './components/viewholidays/viewholidays.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { SendemailComponent } from './components/sendemail/sendemail.component';
import { LeaverecordComponent } from './components/leaverecord/leaverecord.component';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { MagDashboardComponent } from './components/mag-dashboard/mag-dashboard.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { MngHolidayComponent } from './components/mng-holiday/mng-holiday.component';
import { MngEventComponent } from './components/mng-event/mng-event.component';
import { EmpPendingComponent } from './components/emp-pending/emp-pending.component';
import { EmpLeavereportComponent } from './components/emp-leavereport/emp-leavereport.component';

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
  },
  {
    path:'viewevents',component:VieweventsComponent
  },
  {
    path:'viewholidays',component:ViewholidaysComponent
  },
  {
    path:'resetpassword',component:ResetpasswordComponent
  },
  {
    path:'newpassword',component:NewpasswordComponent
  },
  {
    path:'sendemail',component:SendemailComponent
  },
  {
    path:'leaverecord',component:LeaverecordComponent
  },
  {
    path:'emp-dashboard',component:EmpDashboardComponent
  },
  {
    path:'mag-dashboard',component:MagDashboardComponent
  },
  {
    path:'main-dashboard',component:MainDashboardComponent
  },
  {
    path:'mng-holiday',component:MngHolidayComponent
  },
  
  {
    path:'mng-event',component:MngEventComponent
  },
  {
    path:'emp-pending',component:EmpPendingComponent
  },
  {
    path:'emp-leavereport',component:EmpLeavereportComponent
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
    HolidaysComponent,
    VieweventsComponent,
    ViewholidaysComponent,
    ResetpasswordComponent,
    NewpasswordComponent,
    SendemailComponent,
    LeaverecordComponent,
    EmpDashboardComponent,
    MagDashboardComponent,
    MainDashboardComponent,
    MngHolidayComponent,
    MngEventComponent,
    EmpPendingComponent,
    EmpLeavereportComponent,
  
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
