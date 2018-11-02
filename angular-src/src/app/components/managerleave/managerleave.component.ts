import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminleaveService } from '../../services/adminleave.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Adminleave } from '../../shared/adminleave.model';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../shared/leave.model';


@Component({
  selector: 'app-managerleave',
  templateUrl: './managerleave.component.html',
  styleUrls: ['./managerleave.component.css']
})
export class ManagerleaveComponent implements OnInit {


  constructor(private adminleaveService: AdminleaveService,
    private authService:AuthService,
  private flashMessage:FlashMessagesService,
private router:Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshAdminleaveList();
    //this.authService.checkAdminLeave();
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

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.adminleaveService.postAdminleave(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAdminleaveList();

      });
    }
    else if (form.value.status == "accepted") {
      this.adminleaveService.putAdminleave(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAdminleaveList();

      });
    }
    else if (form.value.status == "rejected") {
      this.adminleaveService.putAdminRejectleave(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAdminleaveList();

      });
    }
  }









  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.adminleaveService.selectedAdminleave = {
      _id: "",
      empname: "",
      leavetype: "",
      fromdate: "",
      todate: "",
      leavereason: "",
      status: ""

    }
  }

  refreshAdminleaveList() {
    this.adminleaveService.getAdminleaveList().subscribe((res) => {
      this.adminleaveService.adminleaves = res as Adminleave[];
    });
  }

  onAccept(adminleave: Adminleave) {
    this.adminleaveService.selectedAdminleave = adminleave;

    console.log("leave accepted");
    this.refreshAdminleaveList();

  }


  onReject(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.adminleaveService.deleteAdminleaveList(_id).subscribe((res) => {
        this.refreshAdminleaveList();
        //this.resetForm(form);
        //M.toast({html:'Leave Rejected',classes:'rounded'});
      });
    }

    console.log('Leave rejected');
  }


}
