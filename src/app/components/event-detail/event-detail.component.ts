import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "app/services/events.service";
import { IEvent } from "app/interfaces/ievent";

@Component({
	selector: "app-event-detail",
	templateUrl: "./event-detail.component.html",
	styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {

	private _subscription: any;
	private event: IEvent;

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
