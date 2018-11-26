import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-uploadlogo',
  templateUrl: './uploadlogo.component.html',
  styleUrls: ['./uploadlogo.component.css']
})
export class UploadlogoComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  role:String;

  constructor(private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private employeeService:EmployeeService

  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      role:this.role
    }
    console.log(this.name);
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
        this.flashMessage.show('You are now registered and can now log in', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong ', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });

  }

  onSubmit(){
    this.employeeService.getupload();
  }
}
