import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {AdminleaveService} from '../../services/adminleave.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Adminleave} from '../../shared/adminleave.model';
import {LeaveService} from '../../services/leave.service';
import {Leave} from '../../shared/leave.model';

declare var M:any;
@Component({
  selector: 'app-adminleave',
  templateUrl: './adminleave.component.html',
  styleUrls: ['./adminleave.component.css'],
  providers:[AdminleaveService]
})
export class AdminleaveComponent implements OnInit {

  constructor(private adminleaveService:AdminleaveService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshAdminleaveList();
  }
/*

  onSubmit(form:NgForm){
    if(form.value._id==""){
    this.adminleaveService.postAdminleave(form.value).subscribe((res)=>{
      this.resetForm(form);
       this.refreshAdminleaveList();
     // M.toast({html:'Saved sucessfully',classes:'rounded'});
    });
  }
  else if (form.value.status=="accepted"){

    this.adminleaveService.putAdminleave(form.value).subscribe((res)=>{
      this.resetForm(form);
       this.refreshAdminleaveList();
     // M.toast({html:'Saved sucessfully',classes:'rounded'});
    });
  }
}
*/
onSubmit(form:NgForm){
  if(form.value._id==""){
  this.adminleaveService.postAdminleave(form.value).subscribe((res)=>{
    this.resetForm(form);
     this.refreshAdminleaveList();
   // M.toast({html:'Saved sucessfully',classes:'rounded'});
  });
}
else if (form.value.status=="accepted"){
  this.adminleaveService.putAdminleave(form.value).subscribe((res)=>{
    this.resetForm(form);
     this.refreshAdminleaveList();
   // M.toast({html:'Saved sucessfully',classes:'rounded'});
  });
}
else if(form.value.status=="rejected"){
  this.adminleaveService.putAdminRejectleave(form.value).subscribe((res)=>{
    this.resetForm(form);
     this.refreshAdminleaveList();
   // M.toast({html:'Saved sucessfully',classes:'rounded'});
  });
}
}









  resetForm(form?:NgForm){
    if(form)
    form.reset();
    this.adminleaveService.selectedAdminleave={
      _id:"",
      empname:"",
      leavetype:"",
      fromdate:"",
      todate:"",
      leavereason:"",
      status:""

    }
  }

  refreshAdminleaveList(){
    this.adminleaveService.getAdminleaveList().subscribe((res)=>{
      this.adminleaveService.adminleaves = res as Adminleave[];
    });
  }

  onAccept(adminleave:Adminleave){
  this.adminleaveService.selectedAdminleave = adminleave;

  console.log("leave accepted");
  this.refreshAdminleaveList();
  
  }
    
 
  onReject(_id:string,form:NgForm){
        if(confirm('Are you sure to delete this record?')==true){
          this.adminleaveService.deleteAdminleaveList(_id).subscribe((res)=>{
            this.refreshAdminleaveList();
            //this.resetForm(form);
            //M.toast({html:'Leave Rejected',classes:'rounded'});
          });
        }

        console.log('Leave rejected');
  }

  
}

