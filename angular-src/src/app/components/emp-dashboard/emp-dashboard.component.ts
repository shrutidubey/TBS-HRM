import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Location} from "@angular/common";
import { AnnouncementService } from '../../services/announcement.service';
import { LeaveService } from '../../services/leave.service';
import {Announcement } from '../../shared/announcement.model';
import { NgForm } from '@angular/forms';
import { EmpdashboardService  } from '../../services/empdashboard.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css'],
  providers:[AnnouncementService]
})
export class EmpDashboardComponent implements OnInit {
  
  constructor(private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private location: Location,
  private announcementService:AnnouncementService,
private empdashboard:EmpdashboardService) { }

  ngOnInit() {
   //this.authService.checkUserLogged();
   //this.authService.checkEmployeeDashboard();

   this.resetForm();
   this.refreshEventList();
 
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }

    this.empdashboard.selectedAnnouncement = {
      _id: "",
      announcement:" "


    }
  }

  onSubmit(form: NgForm) {

   
    if (form.value._id == "") {
      this.empdashboard.postAnnouncement(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEventList();

      });
    }
    else {
      this.empdashboard.putAnnouncement(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEventList();

      })
    }

  }

  refreshEventList() {
    this.empdashboard.getAnnouncementList().subscribe((res) => {
      this.empdashboard.announcement = res as Announcement[];
    });
  }

  onEdit(announcement: Announcement) {
  this.empdashboard.selectedAnnouncement = announcement;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.empdashboard.deleteAnnouncement(_id).subscribe((res) => {
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
