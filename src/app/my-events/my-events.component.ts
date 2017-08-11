import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from 'app/shared/services/event.service';
import { EventModel } from 'app/shared/models/event-model';
import { ApplicationStateService } from 'app/shared/services/application-state.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  events: Array<EventModel>;

  constructor(
      private eventService: EventService,
      private appStateService: ApplicationStateService
    ) { }

  ngOnInit() {
      this.eventService.getEvents().subscribe((events) => {
        this.events = events;
      });
  }

  onScroll(event) {
      this.appStateService.updateScroll(event.target.scrollTop);
  }

}
