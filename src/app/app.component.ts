import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {


	ngOnInit() {

	}

	handleCreate(event) {
		event.srcElement.parentElement.classList.add("opened");
		event.srcElement.parentElement.classList.add("opened-finish");
	}

}
