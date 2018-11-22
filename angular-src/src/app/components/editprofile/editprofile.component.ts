import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Employee } from '../../shared/employee.model';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../shared/leave.model';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  providers: [EmployeeService,LeaveService]

})
export class EditprofileComponent implements OnInit {
  
  
  name: String;
  email: String;
  username: String;
  password:String;
  role:String;
  
  constructor(private leaveService: LeaveService
    , private authService: AuthService,
  private employeeService:EmployeeService,
private flashMessage:FlashMessagesService,
private ValidateService:ValidateService,
private router:Router) { }

  ngOnInit() {
    
    this.resetForm();
    this.refreshEmployeeList();
    //this.authService.checkEmployeeLeave();
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
      password:"",
      role:"",
      newpassword:""
     
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
       //   password: this.password,
       //   role:this.role
        }
  
        if (!this.ValidateService.validateRegister(user)) {
          this.flashMessage.show('Please fill all the fields', { cssClass: 'alert-danger', timeout: 3000 });
          return false;
        }
  
        if (!this.ValidateService.validateEmail(user.email)) {
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
    
  /*  var  username = JSON.parse(localStorage.getItem('user')).username
    console.log("local storage username"+JSON.parse(localStorage.getItem('user')).username)
    console.log("username inside refresh Leave List"+username)
    this.employeeService.getUserByUsername(username).subscribe((res) => {
    var abc = (Array.of(res as Employee[])[0])['name']
     console.log(abc);
     var cdf = Array.of(this.employeeService.employees)
     cdf = (Array.of(res as Employee[])[0])['name']
     this.employeeService.employees = abc
console.log("this.employeeService.employees"+this.employeeService.employees)
     console.log( "cdf"+cdf)
     //this.employeeService.employees[0] =abc;
   //  this.employeeService.employees['name'] = (Array.of(res as Employee[])[0])['name'];
   //  this.employeeService.employees['email'] = (Array.of(res as Employee[])[0])['email'];
  //   this.employeeService.employees['username'] = (Array.of(res as Employee[])[0])['username'];
    
    });*/
//var  abc:[]
    var  username = JSON.parse(localStorage.getItem('user')).username;
    this.employeeService.getUserByUsername(username).subscribe((res)=>{
     

      this.employeeService.employees =  res as Employee[];
    })
   

  //  console.log("this.employeeService.employees = res as Employee[]"+(this.employeeService.employees) )
  }

  onEdit(emp: Employee) {
  /*  console.log("edit");
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

  //this.employeeService.sendEmail();*/
 
    this.employeeService.selectedEmployee = emp;
    
  
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
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();



      });
    }
  }
}
