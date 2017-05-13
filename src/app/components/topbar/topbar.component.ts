import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";

@Component({
	selector: 'topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

	private loggedInUser = "";

	constructor(private _userService: UserService) { }

	ngOnInit() {
		this._userService.getLoggedInUser()
			.subscribe(username => this.loggedInUser = username);
	}

}
