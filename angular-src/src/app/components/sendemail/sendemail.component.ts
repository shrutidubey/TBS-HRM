import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LeaveService } from '../../services/leave.service';
import { EmployeeService } from '../../services/employee.service';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  email: String;
  password: String;
  name: String;

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private leaveService:LeaveService,
  private employeeService:EmployeeService) { }

  ngOnInit() {
  }
  
  onLoginSubmit() {

/*    const user = {
      username: this.email,
      password: this.password,
      name: this.name,
    }
   var role
    this.authService.authenticateUser(user).subscribe(data => {
      this.leaveService.getId(this.email);
    // this.authService.storeUsername(this.username);
   var abc =   this.authService.storeUserData(data.token, data.user);
   console.log("in login.component.ts role"+abc);
     role =  this.authService.findRole();
     console.log("role"+JSON.stringify(role));
     console.log("in login.component.ts"+role);
     
      if (role == "Admin" && data.success) {
        console.log("admin role")
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['admindashboard']);
        // this.router.navigate(['admindashboard']);
      }
     else if(role=="Manager"&&data.success){
        console.log("manager role")
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['managerdashboard']);
      }
      else
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          console.log("logged in user"+this.username);
          this.authService.storeUsername(this.username);
          this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
          this.router.navigate(['dashboard']);

        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
          this.router.navigate(['login']);
        }
       // var abc = this.authService.findRole();
    });
this.authService.storeUsername(user);

     this.authService.storeUsername(user){
    

      console.log("login.component.ts" + user.username);

    }
  */

 


  }
  resetpassword(){

    this.employeeService.getuser(this.email)

  }

}
