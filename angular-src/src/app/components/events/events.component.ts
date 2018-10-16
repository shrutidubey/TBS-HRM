import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {LeaveService} from '../../services/leave.service';
import {Event} from '../../shared/event.model';
//declare var M: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers:[EventService,LeaveService]
})
export class EventsComponent implements OnInit {

  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEventList();
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
    }

    this.eventService.selectedEvent= {
      _id:"",
      eventname:"",
      venue:"",
      date:null,
      time:"",
      description:""


    }
  }

  onSubmit(form:NgForm){
    if(form.value._id == ""){
    this.eventService.postEvent(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshEventList();
     // M.toast({html:'Saved successfully',classes:'rounded'});
    });
  }
  else{
    this.eventService.putEvent(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshEventList();
      //M.toast({html:'Updated successfully',classes:'rounded'});
    })
  }
  }

  refreshEventList(){
    this.eventService.getEventList().subscribe((res)=>{
      this.eventService.events = res as Event[];
    });
  }

  onEdit(event:Event){
    this.eventService.selectedEvent = event;
  }

  onDelete(_id:string,form:NgForm){
    if(confirm('Are you sure to delete this record?')==true){
      this.eventService.deleteEvent(_id).subscribe((res)=>{
        this.refreshEventList();
        this.resetForm(form);
        //M.toast({html:'Deleted successfully',classes:'rounded'});

      });

    }
  }
}
