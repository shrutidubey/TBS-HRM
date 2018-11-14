import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HolidayService } from '../../services/holiday.service';
import { LeaveService } from '../../services/leave.service';
import { Holiday } from '../../shared/holiday.model';
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  
  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshHolidayList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }

    this.holidayService.selectedHoliday = {
      _id: "",
      fromdate: "",
      todate: "",
      holidayname: null,
      duration: "",
     


    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.holidayService.postHoliday(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshHolidayList();

      });
    }
    else {
      this.holidayService.putHoliday(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshHolidayList();

      })
    }
  }

  refreshHolidayList() {
    this.holidayService.getHolidayList().subscribe((res) => {
      this.holidayService.holidays = res as Holiday[];
    });
  }

  onEdit(holiday: Holiday) {
  this.holidayService.selectedHoliday = holiday;
  } 

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.holidayService.deleteHoliday(_id).subscribe((res) => {
        this.refreshHolidayList();
        this.resetForm(form);


      });

    }
  }
}
