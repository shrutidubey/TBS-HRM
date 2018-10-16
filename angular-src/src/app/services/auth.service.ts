import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
//import {tokenNotExpired} from 'angular2-jwt';
import {map} from 'rxjs/operators';
import { Session } from 'protractor';


var logusername;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken:any;
  user:any;
  leavedetails:any;
 

  constructor(private http:Http) { }


  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:9008/users/register',user,{headers:headers})
    .pipe(map(res => res.json()));

  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:9008/users/authenticate',user,{headers:headers})
   .pipe(map(res => res.json()));
  }



getProfile(){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization',this.authToken);
  headers.append('Content-Type','application/json');
 return this.http.get('http://localhost:9008/users/profile',{headers:headers})
 .pipe(map(res => res.json()));
}



storeUsername(user){
  logusername = user.username;
  console.log("in auth service"+user.username);
  return logusername;
  
}

getUsername(){
  console.log("get username"+logusername);
  return logusername;
}
  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    console.log(this.user);
    
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  /*
  loggedIn(){
 // console.log(tokenNotExpired());
   return tokenNotExpired();
  }  
*/

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  }

  

/*
  router.get('/logout', function (req, res, next) {
    if (req.session) {
    req.session.destroy(function (err) {
    if (err) {
    return next(err)
    }
    else {
    return res.redirect('/')
    }
    */
  
}
