import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/shared/services/event.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  constructor( private eventService: EventService ) { }

  ngOnInit() {
      this.eventService.getEvents().subscribe((events) => {
        console.log(events);
      });
  }

}
