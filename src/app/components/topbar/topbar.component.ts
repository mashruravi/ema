import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";

@Component({
	selector: 'topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

	loggedInUser = "";
	showSearch = true;

	constructor(private _userService: UserService) { }

	ngOnInit() {
		this._userService.getLoggedInUser()
			.subscribe(username => this.loggedInUser = username);
	}

	onSearchButtonClick(event) {
		event.preventDefault();
		this.showSearch = true;
		const input: any = document.querySelector('#input-search');
		input.select();
	}

	onSearchClose(event) {
		event.preventDefault();
		const input: any = document.querySelector('#input-search');
		input.value = "";
		this.showSearch = false;
	}

}
