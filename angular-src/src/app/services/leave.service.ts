import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { Leave } from '../shared/leave.model';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  selectedLeave: Leave;
  leaves: Leave[];
  readonly baseURL = 'http://localhost:9008/leaves';
  readonly baseURI = 'http://localhost:9008/leaves1';
  readonly baseURP = 'http://localhost:9008/leaves2/empname';

  constructor(private http: HttpClient) { }
/*
  postLeave(leave: Leave) {
    return this.http.post(this.baseURL, leave);
  }
  */

 postLeave(leave: Leave) {
  return this.http.post(this.baseURL ,leave);
}

findRole(user){
  return this.http.get(this.baseURP + `/${user}`);
}
  getLeaveList() {
    return this.http.get(this.baseURL);
  }
getId(username){

  return this.http.get(this.baseURI + `/${username}`);
}
  getUserByUsername(user) {
    console.log("leave.service.ts" + user);

    return this.http.get(this.baseURL + `/${user}`);

  }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
