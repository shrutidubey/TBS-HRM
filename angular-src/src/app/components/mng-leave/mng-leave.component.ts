import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-mng-leave',
  templateUrl: './mng-leave.component.html',
  styleUrls: ['./mng-leave.component.css']
})
export class MngLeaveComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  role:String

  constructor(private employeeService: EmployeeService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
    //this.authService.checkManageEmployees();
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

    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      email: "",
      username: "",
      password: "",
      role:"",
      newpassword:"",
      address:"",
      contactno:"",
      dob:"",
      bloodgrp:""
    }
  }


  onSubmit(form: NgForm) {
    if (form.value._id == "") {
    console.log(this.name);
      console.log(this.email);
      const user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        role:this.role
      }

      if (!this.validateService.validateRegister(user)) {
        this.flashMessage.show('Please fill all the fields', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      }

      if (!this.validateService.validateEmail(user.email)) {
        this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      }

      this.authService.registerUser(user).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('employee successfully registered', { cssClass: 'alert-succes', timeout: 3000 });

          this.resetForm(form);
          this.refreshEmployeeList();
        }
        else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/manageemployees']);
        }
      })

 
  }
    else {

      this.employeeService.putEmployee(form.value).subscribe((res) => {
       this.resetForm(form);
        this.refreshEmployeeList();

      });

      
    }

  }

  refreshEmployeeList() {
    
    this.employeeService.getEmployeeList().subscribe((res) => {

      this.employeeService.employees = res as Employee[];


    });
  }
onEdit(emp: Employee) {
    console.log("edit");
    this.flashMessage.show('you can now edit the employee details', { cssClass: 'alert-succes', timeout: 3000 });
    this.employeeService.selectedEmployee = emp;
    //this.employeeService.selectedEmployee = emp
    var  fname = this.employeeService.selectedEmployee['name'];
    var  femail = this.employeeService.selectedEmployee['email'];
    var fusername = this.employeeService.selectedEmployee['username'];
    var frole = this.employeeService.selectedEmployee['role'];
    var fpassword = this.employeeService.selectedEmployee['password']
    console.log("the selected employee is"+this.employeeService.selectedEmployee['username']);
    console.log("the name is"+  fname);
    console.log("the email is"+femail);
    console.log( "the username is"+fusername);
    console.log("theh role is"+frole);
    console.log("the password is"+fpassword);
     //fname ="Shruti"
    console.log("emp value"+emp['name'])
  // this.inputText();
  //fname = emp['name'];

this.name = fname;
this.email = femail;
this.username = fusername;
this.role = frole;
this.password = fpassword;

  //this.employeeService.sendUserInfo();

  //this.employeeService.sendEmail();
  }
  
 /*
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }
  */
  
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();



      });
    }
  }

  onView(emp: Employee){

    console.log("edit");
    this.flashMessage.show('you can now edit the employee details', { cssClass: 'alert-succes', timeout: 3000 });
    this.employeeService.selectedEmployee = emp;
    //this.employeeService.selectedEmployee = emp
    var  fname = this.employeeService.selectedEmployee['name'];
    var  femail = this.employeeService.selectedEmployee['email'];
    var fusername = this.employeeService.selectedEmployee['username'];
    var frole = this.employeeService.selectedEmployee['role'];
    var fpassword = this.employeeService.selectedEmployee['password']
    console.log("the selected employee is"+this.employeeService.selectedEmployee['username']);
    console.log("the name is"+  fname);
    console.log("the email is"+femail);
    console.log( "the username is"+fusername);
    console.log("theh role is"+frole);
    console.log("the password is"+fpassword);
     //fname ="Shruti"
    console.log("emp value"+emp['name'])
  // this.inputText();
  //fname = emp['name'];

this.name = fname;
this.email = femail;
this.username = fusername;
this.role = frole;
this.password = fpassword;

  //this.employeeService.sendUserInfo();

  //this.employeeService.sendEmail();
    this.employeeService.selectedEmployee = emp;
    var username = this.employeeService.selectedEmployee.username;
    this.employeeService.storeUsername(username);
    console.log("username"+this.employeeService.selectedEmployee.username);
  //  this.adminleaveService.getLeaveRecord(this.adminleaveService.selectedAdminleave.empname);
  }

}
