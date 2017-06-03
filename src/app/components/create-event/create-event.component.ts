import { Component, OnInit, HostBinding } from "@angular/core";
import { EventsService } from "app/services/events.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-create-event',
	templateUrl: './create-event.component.html',
	styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

	private hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
	private minutes: number[] = [0, 15, 30, 45];

	private ename: string;
	private edate: string;

	constructor(
		private _eventsService: EventsService,
		private _router: Router
	) { }

	ngOnInit() {
	}

	private saveEvent() {

		this._eventsService.createEvent(this.ename, this.edate)
			.subscribe(eid => this._router.navigate(["/event", eid]));

	}

}
