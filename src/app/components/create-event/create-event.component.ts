import { Component, OnInit } from "@angular/core";
import { EventsService } from "app/services/events.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-create-event',
	templateUrl: './create-event.component.html',
	styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

	private ename: string;
	private edate: string;

	constructor(
		private _eventsService: EventsService,
		private _router: Router) { }

	ngOnInit() {
	}

	private saveEvent() {

		this._eventsService.createEvent(this.ename, this.edate)
			.subscribe(eid => this._router.navigate(["/event", eid]));

	}

}
