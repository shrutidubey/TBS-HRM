


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { Holiday } from '../shared/holiday.model';


@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  selectedHoliday: Holiday;
  holidays: Holiday[];
  readonly baseURL = 'http://localhost:9008/holidays';
  constructor(private http: HttpClient) { }

  postHoliday(holiday: Holiday) {
    return this.http.post(this.baseURL, holiday);
  }


  getHolidayList() {
    return this.http.get(this.baseURL);
  }


  putHoliday(holiday: Holiday) {

    return this.http.put(this.baseURL + `/${holiday._id}`, holiday);
  }

  deleteHoliday(_id: string) {


    return this.http.delete(this.baseURL + `/${_id}`);
  }




}
