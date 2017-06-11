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
			.map(res => {
				let data = res.json();
				return new Event(data.eid,
					data.ename,
					data.edate,
					data.etime,
					data.createdOn,
					data.createdBy,
					data.location,
					data.description);
			})
	}

	// Creates an event and returns the ID of the created event
	createEvent(event: Event): Observable<string> {

		// Convert date to YYYY-MM-DD format that the backend expects
		let day = event.edate.getDate();
		let month = event.edate.getMonth() + 1; // Month is 0 indexed
		let year = event.edate.getFullYear();
		let eventDate = `${year}-${month}-${day}`;


		let payload = {
			ename: event.name,
			edate: eventDate,
			etime: event.etime,
			location: event.location,
			description: event.description
		};

		return this._http.post(this._url, payload).map(res => res.json().eid);
	}

	deleteEvent(eventId: string): Observable<boolean> {

		return this._http.get(this._url + "?eid=" + eventId + "&delete=true")
			.map(res => {
				if(res.status === 200) {
					return true;
				}
				return false;
			});

	}

}
