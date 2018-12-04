import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnouncementService } from '../../services/announcement.service';
import { LeaveService } from '../../services/leave.service';
import {Announcement } from '../../shared/announcement.model';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEventList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }

    this.announcementService.selectedAnnouncement = {
      _id: "",
      announcement:" "


    }
  }

  onSubmit(form: NgForm) {

   
    if (form.value._id == "") {
      this.announcementService.postAnnouncement(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEventList();

      });
    }
    else {
      this.announcementService.putAnnouncement(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEventList();

      })
    }

  }

  refreshEventList() {
    this.announcementService.getAnnouncementList().subscribe((res) => {
      this.announcementService.announcement = res as Announcement[];
    });
  }

  onEdit(announcement: Announcement) {
  this.announcementService.selectedAnnouncement = announcement;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.announcementService.deleteAnnouncement(_id).subscribe((res) => {
        this.refreshEventList();
        this.resetForm(form);


      });

    }
  }

}
