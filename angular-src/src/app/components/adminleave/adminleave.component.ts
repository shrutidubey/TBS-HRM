import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {AdminleaveService} from '../../services/adminleave.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Adminleave} from '../../shared/adminleave.model';
declare var M:any;
@Component({
  selector: 'app-adminleave',
  templateUrl: './adminleave.component.html',
  styleUrls: ['./adminleave.component.css']
})
export class AdminleaveComponent implements OnInit {

  constructor(private adminleaveService:AdminleaveService) { }

  ngOnInit() {
    this.refreshAdminleaveList();
  }


  onSubmit(form:NgForm){
    this.adminleaveService.postAdminleave(form.value).subscribe((res)=>{
     // this.resetForm(form);
        // this.refreshLeaveList();
     // M.toast({html:'Saved sucessfully',classes:'rounded'});
    });
  }

  refreshAdminleaveList(){
    this.adminleaveService.getAdminleaveList().subscribe((res)=>{
      this.adminleaveService.adminleaves = res as Adminleave[];
    });
  }

  onAccept(adminleave:Adminleave){
   // this.adminleaveService.selectedAdminleave = adminleave;
  console.log("leave accepted");
  this.refreshAdminleaveList();
  }

 
  onReject(_id:string,form:NgForm){
       /* if(confirm('Are you sure to delete this record?')==true){
          this.adminleaveService.deleteAdminleaveList(_id).subscribe((res)=>{
            this.refreshAdminleaveList();
            //this.resetForm(form);
            //M.toast({html:'Leave Rejected',classes:'rounded'});
          });
        }*/

        console.log('Leave rejected');
  }
}

