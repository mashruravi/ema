import { Component, OnInit } from '@angular/core';
import { IEvent } from "app/interfaces/ievent";
import { EventsService } from "app/services/events.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-my-events',
	templateUrl: './my-events.component.html',
	styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

	myevents: Array<IEvent>;

	constructor(
		private _eventsService: EventsService,
		private _router: Router) { }

	ngOnInit() {
		this.updateEvents();
	}

	onCardClick(eid: string): void {
		this._router.navigate(['/event', eid]);
	}

	// This method gets the latest copy events and shows them on the UI
	private updateEvents(): void {
		this._eventsService.getMyEvents()
			.subscribe(events => this.myevents = events);
	}

}
