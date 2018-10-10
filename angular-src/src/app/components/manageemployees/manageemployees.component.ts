import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Employee} from '../../shared/employee.model';

declare var M:any;

@Component({
  selector: 'app-manageemployees',
  templateUrl: './manageemployees.component.html',
  styleUrls: ['./manageemployees.component.css'],
  providers:[EmployeeService]
})
export class ManageemployeesComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private employeeService:EmployeeService,
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?:NgForm){
    if(form)
    form.reset();

    this.employeeService.selectedEmployee={
      _id:"",
      name:"",
      email:"",
      username:"",
      password:""
    }
  }
/*
onSubmit(form: NgForm){
  if(form.value._id==""){
  this.employeeService.postEmployee(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshEmployeeList();
   // M.toast({html:'Saved successfully',classes:'rounded'});

  });
}
else{
  this.employeeService.putEmployee(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshEmployeeList();
    //M.toast({html:'Updated successfully',classes:'rounded'});
  });
}

}
*/

onSubmit(form:NgForm){
  if(form.value._id==""){
  console.log(this.name);
  console.log(this.email);
    const user = {
      name: this.name,
      email:this.email,
      username:this.username,
      password:this.password,
    }
   
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill all the fields',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('employee successfully registered',{cssClass:'alert-succes',timeout:3000});
        //this.router.navigate(['/login']);
        this.resetForm(form);
        this.refreshEmployeeList();
      }
      else{
        this.flashMessage.show('Something went wrong',{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/manageemployees']);
      }
    })
  
  }
  else{
   // console.log("edit");
   this.employeeService.putEmployee(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshEmployeeList();
    //M.toast({html:'Updated successfully',classes:'rounded'});
  });
   
  }
    
}

refreshEmployeeList(){
  this.employeeService.getEmployeeList().subscribe((res)=>{

   this.employeeService.employees = res as Employee[];


  });
}
onEdit(emp:Employee){
console.log("edit");
 this.flashMessage.show('you can now edit the employee details',{cssClass:'alert-succes',timeout:3000});
  this.employeeService.selectedEmployee = emp;
  console.log(this.employeeService.selectedEmployee);

}

onDelete(_id:string,form:NgForm){
if(confirm('Are you sure to delete this record?')==true){
this.employeeService.deleteEmployee(_id).subscribe((res)=>{
  this.resetForm(form);
  this.refreshEmployeeList();

  
  //M.toast({html:'Deleted successfully',classes:'rounded'});
});
}
}
}
