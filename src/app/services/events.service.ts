import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Event } from "app/models/event";

@Injectable()
export class EventsService {

	private _url = "/ema/data/services/events.xsjs";

	constructor(private _http: Http) { }

	getMyEvents(): Observable<Event[]> {
		return this._http.get(this._url)
			.map((res) => {
				return <Event[]>res.json();
			});
	}

	getEvent(eventid: string): Observable<Event> {
		return this._http.get(this._url + "?eid=" + eventid)
			.map(res => <Event>res.json())
	}

	// Creates an event and returns the ID of the created event
	createEvent(event: Event): Observable<string> {

		let payload = {
			ename: event.name,
			edate: event.edate,
			etime : event.etime,
			location: event.location,
			description: event.description
		};

		return this._http.post(this._url, payload).map(res => res.json().eid);
	}

}
