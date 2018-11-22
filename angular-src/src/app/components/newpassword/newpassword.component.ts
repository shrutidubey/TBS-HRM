import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  
  newpassword:String;
  confirmpassword:String;

  constructor(private employeeService: EmployeeService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
   
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
      newpassword:""
    }
  }


  onSubmit(form: NgForm) {
   
    /*const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      role:this.role
    }

*/
    console.log("inside submit")
    //console.log("email"+user)
   // this.employeeService.resetPassword(user);

   //this.employeeService.resettoken()

  }

  refreshEmployeeList() {

  }
onEdit(emp: Employee) {
 
  }
  
 

}
