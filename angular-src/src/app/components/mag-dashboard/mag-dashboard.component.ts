import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { AnnouncementService } from '../../services/announcement.service';
import { LeaveService } from '../../services/leave.service';
import {Announcement } from '../../shared/announcement.model';
import { MagdashboardService  } from '../../services/magdashboard.service';
@Component({
  selector: 'app-mag-dashboard',
  templateUrl: './mag-dashboard.component.html',
  styleUrls: ['./mag-dashboard.component.css']
})
export class MagDashboardComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
  private magdashboard:MagdashboardService) { }
  
    ngOnInit() {
      this.resetForm();
      this.refreshEventList();
    }
  
    resetForm(form?: NgForm) {
      if (form) {
        form.reset();
      }
  
      this.magdashboard.selectedAnnouncement = {
        _id: "",
        announcement:" "
  
  
      }
    }
  
    onSubmit(form: NgForm) {
  
     
      if (form.value._id == "") {
        this.magdashboard.postAnnouncement(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEventList();
  
        });
      }
      else {
        this.magdashboard.putAnnouncement(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEventList();
  
        })
      }
  
    }
  
    refreshEventList() {
      this.magdashboard.getAnnouncementList().subscribe((res) => {
        this.magdashboard.announcement = res as Announcement[];
      });
    }
  
    onEdit(announcement: Announcement) {
    this.magdashboard.selectedAnnouncement = announcement;
    }
  
    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this record?') == true) {
        this.magdashboard.deleteAnnouncement(_id).subscribe((res) => {
          this.refreshEventList();
          this.resetForm(form);
  
  
        });
  
      }
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