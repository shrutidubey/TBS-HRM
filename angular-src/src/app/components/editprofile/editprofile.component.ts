import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
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
   // this.authService.checkManageEmployees();
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
      role:""
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
  employees:any
  array = [];
  refreshEmployeeList() {
    var  username = JSON.parse(localStorage.getItem('user')).username
    console.log("username"+username);
    let arr = []
    this.employeeService.getUserByUsername(username).subscribe((res) => {
    this.employeeService.employees = res as Employee[];
    });
    //this.array = this.employeeService.getArray();
    //console.log("this.array"+this.array);
   // console.log("joooo"+ res as Employee[]);
  }
/*
  refreshEmployeeList() {
    //var username = this.authService.getUsername();
    var  username = JSON.parse(localStorage.getItem('user')).username
    console.log("local storage username"+JSON.parse(localStorage.getItem('user')).username)
    console.log("uername inside refresh Leave List"+username)
    //console.log("yes yes"+this.employeeService.getUserByUsername(username))
    this.employeeService.getUserByUsername(username).subscribe((res) => {
     this.employeeService.employees = res as Employee[];
//console.log("youuuu"+this.employeeService.employees[0].name)
    // console.log("youuuu"+this.leaveService.leaves[0].empname)
     //console.log("youuuu1"+ (res as Leave[]))
    //  console.log("username"+)
    });
  }
  */
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
}
