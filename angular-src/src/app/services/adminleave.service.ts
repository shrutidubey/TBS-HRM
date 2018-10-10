import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs'
import {Adminleave} from '../shared/adminleave.model';

@Injectable({
  providedIn: 'root'
})
export class AdminleaveService {
  selectedAdminleave: Adminleave;
  adminleaves:Adminleave[];
  readonly baseURL = 'http://localhost:9008/adminleave';
  constructor(private http:HttpClient) { }

  postAdminleave(adminleave:Adminleave){
    return this.http.post(this.baseURL,adminleave);
  
}

 getAdminleaveList(){
   return this.http.get(this.baseURL);
 }

 deleteAdminleaveList(_id:string){
  return this.http.delete(this.baseURL+`/${_id}`);
 }


}
