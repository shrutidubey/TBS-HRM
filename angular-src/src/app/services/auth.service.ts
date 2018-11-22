import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Session } from 'protractor';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';
var logusername;
var userrole;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;
  leavedetails: any;


  constructor(private http: Http,
    private router:Router,
  private flashMessage:FlashMessagesService) { }


  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:9008/users/register', user, { headers: headers })
      .pipe(map(res => res.json()));

  }
/*
 resetPassword(user){
  
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("inside reset password");
    return this.http.post('http://localhost:9008/uippooi', user, { headers: headers })
      .pipe(map(res => res.json()));
 
 }
 */




 resetPassword(email){
  

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  console.log("inside reset password");
  return this.http.get('http://localhost:9008/abchg')
    .pipe(map(res => res.json()));
}
 
 

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:9008/users/authenticate', user, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getPendingLeaves(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:9008/leaves2/pendingleaves', { headers: headers })
      .pipe(map(res => res.json()));
  }
 


  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:9008/users/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }


  

  storeUsername(user) {
    logusername = user;
   // userrole = user.role
    console.log("in auth service" + user);
    return logusername;
  }

  getUsername() {
    console.log("get username" + logusername);
    return logusername;
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    console.log(this.user);
     this.findRole();

  }

  findRole(){
    var abc = this.user.role;
    console.log("role"+abc);
    return abc;
  }


  getId(username){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:9008/users/findid', { headers: headers })
      .pipe(map(res => res.json()));

  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('id_token');
    localStorage.clear();

  }
  
  checkUserLogged(){
  
  
    var exists =  localStorage.getItem('user');
   
   
    if(exists&&JSON.parse(localStorage.getItem('user')).username!="admin"){
      
      this.router.navigate(['dashboard']);
      console.log("new method"+exists)

    }
    
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }
    }

  

  checkAdminDashboard(){
    var exists =  JSON.parse(localStorage.getItem('user'));
 

    if(exists&&JSON.parse(localStorage.getItem('user')).username==="admin"){
      
      this.router.navigate(['admindashboard']);
      console.log("new method"+exists)

    }
    
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }
  }



  


  checkManageEmployees(){
    var exists =  JSON.parse(localStorage.getItem('user'));
  /*  var localStorageUsername = exists.username;
    if(localStorageUsername==="admin"){
    if(this.authToken){
      this.router.navigate(['manageemployees']);
    }
  }
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }*/

    if(exists&&JSON.parse(localStorage.getItem('user')).username==="admin"){
      
      this.router.navigate(['manageemployees']);
      console.log("new method"+exists)

    }
    
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }

  }

  checkManagerEmp(){

    var exists =  JSON.parse(localStorage.getItem('user'));
    /*  var localStorageUsername = exists.username;
      if(localStorageUsername==="admin"){
      if(this.authToken){
        this.router.navigate(['manageemployees']);
      }
    }
      else{
        this.router.navigate(['login']);
        this.flashMessage.show('Please Login to continue',{
          cssClass:'alert-success',
          timeout:3000
      
        });
      }*/
  
      if(exists&&JSON.parse(localStorage.getItem('user')).username==="ashish"){
        
        this.router.navigate(['manageeemp']);
        console.log("new method"+exists)
  
      }
      
      else{
        this.router.navigate(['login']);
        this.flashMessage.show('Please Login to continue',{
          cssClass:'alert-success',
          timeout:3000
      
        });
      }

  }

  checkEmployeeLeave(){
    var exists =  JSON.parse(localStorage.getItem('user'));

    if(exists){
      
      this.router.navigate(['manageleaves']);
      console.log("new method"+exists)

    }
    
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }

 
  }
  checkManagerDashboard(){
    var exists =  JSON.parse(localStorage.getItem('user'));
 

    if(exists&&JSON.parse(localStorage.getItem('user')).username==="ashish"){
      
      this.router.navigate(['managerdashboard']);
      console.log("new method"+exists)

    }
    
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }
  }

 
  
  checkEmployeeDashboard(){
    var exists =  JSON.parse(localStorage.getItem('user'));

    if(exists){
      
      this.router.navigate(['dashboard']);
      console.log("new method"+exists)

    }
    
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }

  }

  checkManagerLeave(){
    var exists =  JSON.parse(localStorage.getItem('user'));
 

    if(exists&&JSON.parse(localStorage.getItem('user')).username==="ashish"){
      
      this.router.navigate(['managerleave']);
      console.log("new method"+exists)
    }
    
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }

  }

  
  checkAdminLeave(){
    var exists =  JSON.parse(localStorage.getItem('user'));
   /* var localStorageUsername = exists.username;
    if(localStorageUsername==="admin"){
    if(this.user){

      this.router.navigate(['adminleave']);
    }
  }
    else{
      this.router.navigate(['login']);
      this.flashMessage.show('Please Login to continue',{
        cssClass:'alert-success',
        timeout:3000
    
      });
    }
  }*/

  if(exists&&JSON.parse(localStorage.getItem('user')).username==="admin"){
      
    this.router.navigate(['adminleave']);
    console.log("new method"+exists)

  }
  
  else{
    this.router.navigate(['login']);
    this.flashMessage.show('Please Login to continue',{
      cssClass:'alert-success',
      timeout:3000
  
    });
  }

  
  
}



}
