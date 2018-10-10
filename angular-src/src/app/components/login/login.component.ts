import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;

  password:String;
  name:String;

  constructor(private authService:AuthService,
  private router:Router,
   private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
 onLoginSubmit(){
   ////console.log(this.username);

   const user ={
     username:this.username,
     password:this.password,
     name:this.name,
   }

   this.authService.authenticateUser(user).subscribe(data=>{
        console.log(user.username);
      if(this.username=="admin" && data.success){
        this.authService.storeUserData(data.token,data.user);
        this.flashMessage.show('You are now logged in',{cssClass:'alert-success',timeout:5000});
        this.router.navigate(['admindashboard']);
            // this.router.navigate(['admindashboard']);
      }
  
      else
       if(data.success){
           this.authService.storeUserData(data.token,data.user);
           this.flashMessage.show('You are now logged in',{cssClass:'alert-success',timeout:5000});
           this.router.navigate(['dashboard']);
        
          }else{
          this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:5000});
          this.router.navigate(['login']);
        }

   });


   this.authService.storeUsername(user){
    console.log("login.component.ts"+user.username);
   }
    
   
 }

}
