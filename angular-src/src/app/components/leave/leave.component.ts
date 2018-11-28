import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Leave } from '../../shared/leave.model';

import {Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../services/employee.service';

declare var M: any

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  providers: [LeaveService,EmployeeService]
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
    , private authService: AuthService,
  private employeeService:EmployeeService,
private flashMessage:FlashMessagesService,
private router:Router) { }

  ngOnInit() {
    
    this.resetForm();
    this.refreshLeaveList();
   this.authService.checkEmployeeLeave();
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
      acceptedleaves:"",
      status: "",
      //approvedby:"",
      totalleaves:"",
     
    }
  }



  onSubmit(form: NgForm) {
    form.value.empname = JSON.parse(localStorage.getItem('user')).username
    this.leaveService.postLeave(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshLeaveList();
      console.log(this.empname);
    });
  }

  refreshLeaveList() {
    //var username = this.authService.getUsername();
    var  username = JSON.parse(localStorage.getItem('user')).username
    console.log("local storage username"+JSON.parse(localStorage.getItem('user')).username)
    console.log("username inside refresh Leave List"+username)
 //  console.log("inside leave service now see this"+this.leaveService.getUserByUsername(username)[0])
    this.leaveService.getUserByUsername(username).subscribe((res) => {
     this.leaveService.leaves = res as Leave[];
    // console.log("youuuu"+this.leaveService.leaves[0].empname)
     //console.log("youuuu1"+ (res as Leave[]))
    //  console.log("username"+)
    });
  }
/*
  refreshAdminleaveList() {
    this.adminleaveService.getAdminleaveList().subscribe((res) => {
      this.adminleaveService.adminleaves = res as Adminleave[];
    });
  }
*/

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.leaveService.deleteEmployee(_id).subscribe((res) => {
        this.resetForm(form);
        this.refreshLeaveList();



      });
    }
  }

}
