import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { Adminleave } from '../shared/adminleave.model';

@Injectable({
  providedIn: 'root'
})
export class AdminleaveService {
  selectedAdminleave: Adminleave;
  adminleaves: Adminleave[];
  readonly baseURL = 'http://localhost:9008/adminleave';
  readonly baseURI = 'http://localhost:9008/adminrejectleave';
  readonly baseURF = 'http://localhost:9008/leaves2/pendingleaves'
  constructor(private http: HttpClient) { }

  postAdminleave(adminleave: Adminleave) {
    return this.http.post(this.baseURL, adminleave);
  }


  getAdminleaveList() {
    return this.http.get(this.baseURL);
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



}
