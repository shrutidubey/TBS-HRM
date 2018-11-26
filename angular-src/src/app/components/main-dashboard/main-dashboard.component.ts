import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService) { }
  
    ngOnInit() {
      //this.authService.checkAdminDashboard();
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