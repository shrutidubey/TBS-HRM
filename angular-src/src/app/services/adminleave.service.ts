import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { Adminleave } from '../shared/adminleave.model';
var user
@Injectable({
  providedIn: 'root'
})

export class AdminleaveService {
  selectedAdminleave: Adminleave;
  adminleaves: Adminleave[];
  readonly baseURL = 'http://localhost:9008/adminleave';
  readonly baseURI = 'http://localhost:9008/adminrejectleave';
  readonly baseURF = 'http://localhost:9008/leaves2/pendingleaves'
  readonly baseURT = 'http://localhost:9008/getusernames'
  readonly baseURB = 'http://localhost:9008/getuserandleave'
  readonly baseURY = 'http://localhost:9008/reject'
  constructor(private http: HttpClient) { }

  postAdminleave(adminleave: Adminleave) {
    return this.http.post(this.baseURL, adminleave);
  }


  getAdminleaveList() {
    return this.http.get(this.baseURL);
  }
  getAllUsernames(){
  return this.http.get(this.baseURT);
  }
    
  reject(adminleave: Adminleave){
    console.log("inside reject decline")
    return this.http.put(this.baseURY,adminleave);
  }

  deleteAdminleaveList(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  putAdminleave(adminleave: Adminleave) {
    return this.http.put(this.baseURL + `/${adminleave._id}`, adminleave);
  }

  getUserByStatus(){
    return this.http.get(this.baseURF);
  }

  putAdminRejectleave(adminleave: Adminleave) {
    return this.http.put(this.baseURI + `/${adminleave._id}`, adminleave)
  }
  deleteAdminleave(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`)
  }

  storeUsername(username){
     user = username;
  }

  getrecord(){
    return user
  }


  getUserByUserandLeave(username){
return this.http.get(this.baseURB + `/${username}`)
  }
}
