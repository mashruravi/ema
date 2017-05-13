import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

@Injectable()
export class UserService {

	private _url = "/ema/data/services/current-user.xsjs";

	constructor(private _http: Http) { }

	getLoggedInUser(): Observable<string> {
		
		return this._http.get(this._url)
				.map(res => res.json().username);
		
	}

}
