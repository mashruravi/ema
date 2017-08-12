import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'app/shared/services/event.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

    eventForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private eventService: EventService,
        private router: Router
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.eventForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-z0-9 ]*$/)])],
            location: ['', Validators.pattern(/^[a-zA-z0-9 ]*$/)],
            date: '',
            description: ''
        });
    }

    onSave() {
        this.eventService.createEvent(
            this.eventForm.value.name,
            this.eventForm.value.date,
            this.eventForm.value.location,
            this.eventForm.value.description
        ).subscribe(event => {

            this.router.navigate(['my-events', event.id]);

        });
    }

}
