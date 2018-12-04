import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Location} from "@angular/common";

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit {

  constructor(private authService:AuthService,
  private flashMessage:FlashMessagesService,
private router:Router) { }

  ngOnInit() {
    //this.authService.checkUserLogged();
    //this.authService.checkManagerDashboard();
   }
 
   onLogoutClick(){
     this.authService.logout();
     this.flashMessage.show('You are logged out',{
       cssClass:'alert-success',
       timeout:3000
 
     });
     this.router.navigate(['/login']);
     return false;
   }
}
