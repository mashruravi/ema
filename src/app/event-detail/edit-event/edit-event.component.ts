import { Component, OnInit, Input, Directive, ElementRef, Renderer } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventModel, Status } from 'app/shared/models/event-model';

import 'rxjs/add/operator/distinctUntilChanged';
import { EventService } from 'app/shared/services/event.service';

@Component({
    selector: 'app-edit-event',
    templateUrl: './edit-event.component.html',
    styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

    @Input() event: EventModel;
    eventForm: FormGroup;

    fieldStates: Map<string, Status>;

    constructor(private fb: FormBuilder, private eventService: EventService) {
    }

    ngOnInit() {
        this.eventForm = this.fb.group({
            name: this.event.name || '',
            location: this.event.location || '',
            description: this.event.description || '',
            date: this.event.date || ''
        });

        this.attachChangeHandlers();
    }

    attachChangeHandlers(): void {

        this.fieldStates = new Map<string, Status>();

        const fields = Object.keys(this.eventForm.controls);
        fields.forEach((e) => {

            this.fieldStates[e] = Status.SUCCESS;

            this.eventForm.get(e).valueChanges
                .debounceTime(700)
                .distinctUntilChanged()
                .subscribe((val) => {

                    if (!!this.eventForm.get(e).errors) {
                        this.fieldStates[e] = Status.ERROR;
                        return;
                    }

                    this.fieldStates[e] = Status.PENDING;

                    const updatedEvent = new EventModel(
                        this.event.id, this.event.name, this.event.date, this.event.time, this.event.location, this.event.description
                    );

                    updatedEvent[e] = val;

                    this.eventService.updateEvent(updatedEvent).subscribe(() => {
                        this.fieldStates[e] = Status.SUCCESS;
                        this.event[e] = val;
                    }, () => {
                        this.fieldStates[e] = Status.ERROR;
                    });

                });

        }, this);

    }

}
