import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "app/services/events.service";
import { Event } from "app/models/event";

@Component({
	selector: "app-event-detail",
	templateUrl: "./event-detail.component.html",
	styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {

	private _subscription: any;
	private event: Event;

	constructor(
		private _route: ActivatedRoute,
		private _eventsService: EventsService) { }

	private updateEventDetails(eid: string): void {
		this._eventsService.getEvent(eid)
			.subscribe(event => this.event = event);
	}

	ngOnInit() {
		this._subscription = this._route.params.subscribe(params => {
			let eid = params["id"];
			this.updateEventDetails(eid);
		});
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

}
