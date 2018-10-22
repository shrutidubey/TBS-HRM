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

  constructor(private http: HttpClient) { }

  postLeave(leave: Leave) {
    return this.http.post(this.baseURL, leave);
  }

  getLeaveList() {

    return this.http.get(this.baseURL);
  }

  getUserByUsername(user) {
    console.log("leave.service.ts" + user);

    return this.http.get(this.baseURL + `/${user}`);

  }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
