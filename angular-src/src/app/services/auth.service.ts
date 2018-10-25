import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Session } from 'protractor';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';
var logusername;
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

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:9008/users/authenticate', user, { headers: headers })
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
    logusername = user.username;
    console.log("in auth service" + user.username);
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

   //var abc =  localStorage.getItem('user');
   //console.log("new method"+abc);

  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
/*
  logout(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:9008/users/logout', { headers: headers })
      .pipe(map(res => res.json()));
  }
  */


  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('id_token');
    localStorage.clear();

  }
  checkUserLogged(){
  
   // var exists =  localStorage.getItem('user');
    var exists =  JSON.parse(localStorage.getItem('user'));
    var localStorageUsername = exists.username;
    if(exists)
    console.log("yes yes")
    if(localStorageUsername!="admin"){
    if(exists){
      this.router.navigate(['dashboard']);
      console.log("new method"+exists)

    }
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
    var localStorageUsername = exists.username;
    if(localStorageUsername==="admin"){
    if(this.authToken){
      this.router.navigate(['admindashboard']);
    }
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
    var localStorageUsername = exists.username;
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
    }
  }

  checkEmployeeLeave(){
    var exists =  JSON.parse(localStorage.getItem('user'));
    var localStorageUsername = exists.username;
    console.log("whole value"+localStorageUsername )
    
    if(localStorageUsername!="admin"){
    if(exists ){
      this.router.navigate(['manageleaves']);
    }
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
    var localStorageUsername = exists.username;
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
  }
  
}


