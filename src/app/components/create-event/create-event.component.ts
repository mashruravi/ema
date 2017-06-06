import { Component, OnInit, HostBinding } from "@angular/core";
import { EventsService } from "app/services/events.service";
import { Router } from "@angular/router";

import { appearAnimation } from "app/animations";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Event } from "app/models/event";

@Component({
	selector: 'app-create-event',
	templateUrl: './create-event.component.html',
	styleUrls: ['./create-event.component.css'],
	animations: [appearAnimation]
})
export class CreateEventComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.position') hostPosition = "absolute";

	private hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
	private minutes: number[] = [0, 15, 30, 45];

	private eventForm: FormGroup;
	private event: Event;

	constructor(
		private _eventsService: EventsService,
		private _router: Router,
		private _fb: FormBuilder
	) {

		this.createForm();

	}

	createForm() {
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

	ngOnInit() {
	}

	prepareEventForSave(formData: any): Event {

		const event = new Event(
			null,
			formData.name,
			formData.edate,
			formData.etime.startHour + ":" + formData.etime.startMinute,
			null,
			null,
			formData.elocation,
			formData.description
		);
		return event;

	}

	private saveEvent() {

		let formData = this.eventForm.getRawValue();
		this.event = this.prepareEventForSave(formData);

		this._eventsService.createEvent(this.event)
			.subscribe(eid => this._router.navigate(["/event", eid]));

	}

}
