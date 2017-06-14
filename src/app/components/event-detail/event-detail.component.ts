import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventsService } from "app/services/events.service";
import { Event } from "app/models/event";
import { MdSnackBar } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-event-detail",
	templateUrl: "./event-detail.component.html",
	styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {

	private hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
	private minutes: number[] = [0, 15, 30, 45];

	private _subscription: any;
	private event: Event;
	private eventForm: FormGroup;

	constructor(
		private _route: ActivatedRoute,
		private _eventsService: EventsService,
		private _router: Router,
		private snackBar: MdSnackBar,
		private _fb: FormBuilder) {

	}

	private updateEventDetails(eid: string): void {
		this._eventsService.getEvent(eid)
			.subscribe(event => {
				this.event = event;

				let timeParts = this.event.etime.split(":");

				this.eventForm.setValue({
					name: this.event.name,
					edate: this.event.edate,
					etime: {
						startHour: parseInt(timeParts[0]),
						startMinute: parseInt(timeParts[1])
					},
					elocation: this.event.location,
					description: this.event.description
				});

			});
	}

	private buildForm() {

		this.eventForm = this._fb.group({
			name: ["", Validators.required],
			edate: [{ value: "", disabled: true }],
			etime: this._fb.group({
				startHour: "",
				startMinute: ""
			}),
			elocation: "",
			description: ""
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

	private prepareEventForSave(formData: any): Event {
		const event = new Event(
			this.event.id,
			formData.name,
			formData.edate,
			formData.etime.startHour + ":" + formData.etime.startMinute,
			this.event.createdOn,
			this.event.createdBy,
			formData.elocation,
			formData.description
		);
		return event;
	}

	private updateEvent() {
		let formData = this.eventForm.getRawValue();
		let updatedEvent = this.prepareEventForSave(formData);

		this._eventsService.updateEvent(updatedEvent)
			.subscribe((updated: boolean) => {
				if (updated) {
					this.snackBar.open("Event updated successfully.", "", {
						duration: 3000
					});
				} else {
					this.snackBar.open("Couldn't update the event! :( Please try again later.", "", {
						duration: 3000
					});
				}

			}, (error) => {
				this.snackBar.open("Couldn't update the event! :( Please try again later.", "", {
					duration: 3000
				});
			});
	}

	ngOnInit() {
		this._subscription = this._route.params.subscribe(params => {
			let eid = params["id"];
			this.updateEventDetails(eid);
			this.buildForm();
		});
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

}
