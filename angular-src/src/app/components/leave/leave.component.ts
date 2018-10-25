import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Leave } from '../../shared/leave.model';



declare var M: any

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  providers: [LeaveService]
})
export class LeaveComponent implements OnInit {
  empname: String;
  leave: Leave;
  leavetype: String;
  fromdate: String;
  todate: String;
  leavereason: String;
  status: String;

  constructor(private leaveService: LeaveService
    , private authService: AuthService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshLeaveList();
    this.authService.checkEmployeeLeave();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.leaveService.selectedLeave = {
      _id: "",
      empname: "",
      leavetype: "",
      fromdate: null,
      todate: null,
      leavereason: "",
      leavecount: "",
      status: ""
    }
  }

  onSubmit(form: NgForm) {

    this.leaveService.postLeave(form.value).subscribe((res) => {

      this.resetForm(form);
      this.refreshLeaveList();
      console.log(this.empname);
    });
  }


  refreshLeaveList() {
    var username = this.authService.getUsername();
    this.leaveService.getUserByUsername(username).subscribe((res) => {
      this.leaveService.leaves = res as Leave[];
      console.log(this.leaveService.getUserByUsername(username));
    });
  }


  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.leaveService.deleteEmployee(_id).subscribe((res) => {
        this.resetForm(form);
        this.refreshLeaveList();



      });
    }
  }

}
