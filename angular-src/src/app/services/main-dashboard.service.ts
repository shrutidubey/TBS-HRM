import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { Announcement } from '../shared/announcement.model';

@Injectable({
  providedIn: 'root'
})
export class MainDashboardService {

  selectedAnnouncement: Announcement;
  announcement: Announcement[];
  readonly baseURL = 'http://localhost:9008/announcement';
  constructor(private http: HttpClient) { }

  postAnnouncement(announcement: Announcement) {
    return this.http.post(this.baseURL, announcement);
  }


  getAnnouncementList() {
    return this.http.get(this.baseURL);
  }


  putAnnouncement(announcement: Announcement) {

    return this.http.put(this.baseURL + `/${announcement._id}`, announcement);
  }

  deleteAnnouncement(_id: string) {


    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
