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
    AdminleaveComponent
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
