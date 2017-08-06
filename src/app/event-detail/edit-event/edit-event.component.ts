import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-edit-event',
    templateUrl: './edit-event.component.html',
    styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

    eventForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.eventForm = this.fb.group({
            name: '',
            location: '',
            description: '',
            date: ''
        });
    }

    ngOnInit() {
    }

}
