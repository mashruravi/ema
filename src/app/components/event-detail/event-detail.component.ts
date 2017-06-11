import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventsService } from "app/services/events.service";
import { Event } from "app/models/event";
import { MdSnackBar } from "@angular/material";

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
		private _eventsService: EventsService,
		private _router: Router,
		private snackBar: MdSnackBar) { }

	private updateEventDetails(eid: string): void {
		this._eventsService.getEvent(eid)
			.subscribe(event => {
				this.event = event;
			});
	}

	private onDeleteEvent(): void {

		let eid = this.event.id;
		this._eventsService.deleteEvent(eid)
			.subscribe((deleted: boolean) => {

				// If deleted successfully, go to my events page
				if (deleted) {
					this._router.navigate(["/myevents"]);
				} else { // else show error in snackbar
					this.snackBar.open("Couldn't delete the event! :( Please try again later.", "", {
						duration: 3000
					});
				}

			});
			
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
