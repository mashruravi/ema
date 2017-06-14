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

	// Convert date to YYYY-MM-DD format that the backend expects
	private convertDate(date: Date): string {
		date = new Date(date);
		let day = date.getDate();
		let month = date.getMonth() + 1; // Month is 0 indexed
		let year = date.getFullYear();

		return `${year}-${month}-${day}`;
	}

	private makePayload(event: Event, method?: string): Object {

		let eventDate = this.convertDate(event.edate);

		let payload = {
			ename: event.name,
			edate: eventDate,
			etime: event.etime,
			location: event.location,
			description: event.description
		};

		if(method === "UPDATE") {
			payload["eid"] = event.id;
		}

		return payload;

	}

	// Creates an event and returns the ID of the created event
	createEvent(event: Event): Observable<string> {

		let payload = this.makePayload(event);

		return this._http.post(this._url, payload).map(res => res.json().eid);
	}

	updateEvent(event: Event): Observable<boolean> {

		let payload = this.makePayload(event, "UPDATE");
		return this._http.put(this._url, payload)
			.map(res => {
				if(res.status === 200) {
					return true;
				} else {
					return false;
				}
			}).catch((err, caught) => {
				return Observable.throw(false);
			});

	}

	deleteEvent(eventId: string): Observable<boolean> {

		return this._http.delete(this._url + "?eid=" + eventId)
			.map(res => {
				if(res.status === 204) {
					return true;
				}
				return false;
			});

	}

}
