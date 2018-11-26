import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Employee } from '../../shared/employee.model';

var abc = "abc"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,
  private router:Router) { }

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe((res) => {

      this.employeeService.employees = res as Employee[];
      var isAdmin = (JSON.stringify(res as Employee[])).search('Admin');
      console.log("emp list"+isAdmin);
      if(isAdmin<0){
        this.router.navigate(['register']);
      }
      else{
        this.router.navigate(['login']);
      }
/*if( JSON.stringify(this.employeeService.employees) ==){
  console.log("true")
}
else{
  console.log("false")
}*/
    });
    
 //  var emplist =  this.employeeService.getEmployeeList();
   //console.log("emplist"+JSON.stringify(emplist));
/*if (abc =="abc"){
  console.log("true")
}
else{
  console.log("false")
}*/
  }

}
