import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/shared/services/event.service';
import { EventModel } from 'app/shared/models/event-model';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  events: Array<EventModel>;

  constructor( private eventService: EventService ) { }

  ngOnInit() {
      this.eventService.getEvents().subscribe((events) => {
        this.events = events;
      });
  }

}
