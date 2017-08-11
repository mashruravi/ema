import { Component, OnInit } from '@angular/core';
import { EventModel } from 'app/shared/models/event-model';
import { EventService } from 'app/shared/services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

    event: EventModel;

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.loadEventData();

    }

    /* Get the event id from the URL and fetch the data from the backend.
     * The event service returns and event model that is stored as an instance variable
     */
    loadEventData(): void {

        // Get the event id from the route parameter
        const eventId = this.route.snapshot.params['eventid'];

        // Get the event data
        this.eventService.getEvent(eventId).subscribe(event => {
            this.event = event;
        });

    }

}
