
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { Employee } from '../shared/employee.model';
import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
var user=null;
@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  //employees:any = [];
  
  readonly baseURL = "http://localhost:9008/users";
  readonly baseURI = "http://localhost:9008/editprofile"
  readonly baseURT = "http://localhost:9008/editprofile"
  readonly baseURY = "http://localhost:9008/forgot"
  readonly baseURZ = "http://localhost:9008/forgot"
  constructor(private http: HttpClient) { }
  /*this.isbnsource.getBooks(this.isbn).subscribe(
    data => { this.foundBooks = data.json();
this.foundBooks = Array.of(this.foundBooks); 
     },
    err => console.error(err), 
    () => console.log('getBooks completed') 
    );
*/
  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getUserByUsername(user) {
    console.log("employee.service.ts" + user);
    return this.http.get("http://localhost:9008/editprofile" + `/${user}`);
  //  return this.http.get(this.baseURL);
  }

  resetPassword(email){
    console.log("inside reset password of employee.service.ts");
    return this.http.post(this.baseURY,email)
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {

   return this.http.put(this.baseURL + `/${emp._id}`,emp);
 
  }

  putforgotEmployee(emp:Employee){
    return this.http.put(this.baseURZ + `/${emp._id}`,emp);
  }
findByEmail(user){
  console.log("user"+user);
    return this.http.get("http://localhost:9008/getUserByEmail"+`/${user}`)
}


  

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
 // var user;

  getuser(username){
    user = username
    console.log("in employee.service.ts"+user)
  
  }

  getusername(){
    return user;
  }

  storeUsername(username){
    user = username;
 }

 getrecord(){
   return user
 }
}
