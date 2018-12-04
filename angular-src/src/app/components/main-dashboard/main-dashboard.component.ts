import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AnnouncementService } from '../../services/announcement.service';
import { NgForm } from '@angular/forms';
import {  MainDashboardService } from '../../services/main-dashboard.service';
import { LeaveService } from '../../services/leave.service';
import {Announcement } from '../../shared/announcement.model';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
  providers:[AnnouncementService]
})
export class MainDashboardComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
  private announcementService:AnnouncementService,
  private maindashboard:MainDashboardService
) { }
  
    ngOnInit() {
      //this.resetForm();
    this.refreshEventList();
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

    resetForm(form?: NgForm) {
      if (form) {
        form.reset();
      }
  
      this.maindashboard.selectedAnnouncement = {
        _id: "",
        announcement:" "
  
  
      }
    }
  
    onSubmit(form: NgForm) {
  
     
      if (form.value._id == "") {
        this.maindashboard.postAnnouncement(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEventList();
  
        });
      }
      else {
        this.maindashboard.putAnnouncement(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEventList();
  
        })
      }
  
    }
  
    refreshEventList() {
      this.maindashboard.getAnnouncementList().subscribe((res) => {
        this.maindashboard.announcement = res as Announcement[];
        console.log("this.maindashboard.announcement = res as Announcement[];"+  this.maindashboard.announcement[0].announcement);
      });
    }
  
    onEdit(announcement: Announcement) {
    this.maindashboard.selectedAnnouncement = announcement;
    }
  
    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this record?') == true) {
        this.maindashboard.deleteAnnouncement(_id).subscribe((res) => {
          this.refreshEventList();
          this.resetForm(form);
  
  
        });
  
      }
    }
  }