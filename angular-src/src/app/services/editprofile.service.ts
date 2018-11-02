import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { Employee } from '../shared/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  selectedEmployee: Employee | {} = {};
  employees: Employee[];
  readonly baseURL = "http://localhost:9008/users";
  readonly baseURI = "http://localhost:9008/user1"
  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    
    return this.http.get(this.baseURL);
    
  }

  getUserByUsername(user) {
    console.log("employee.service.ts" + user);

    return this.http.get(this.baseURI + `/${user}`);

  }

 
  putEmployee(emp: Employee) {
  // return this.http.put(this.baseURL + `/${emp._id}`, emp);
  console.log("hey i am insiside putemployee")
   return this.http.put(this.baseURL + `/${emp._id}`,emp);
  //return this.http.post(this.baseURL, emp);
  }
/*
  putEvent(event: Event) {

    return this.http.put(this.baseURL + `/${event._id}`, event);
  }
*/


  

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
