import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IEvent } from "app/interfaces/ievent";

@Injectable()
export class EventsService {

	private _url = "/ema/data/services/events.xsjs";

	constructor(private _http: Http) { }

	getMyEvents(): Observable<IEvent[]> {
		return this._http.get(this._url)
			.map((res) => {
				return <IEvent[]>res.json();
			});
	}

	getEvent(eventid: string): Observable<IEvent> {
		return this._http.get(this._url + "?eid=" + eventid)
			.map(res => <IEvent>res.json())
	}

	// Creates an event and returns the ID of the created event
	createEvent(ename: string, edate: string): Observable<string> {
		return this._http.post(this._url, {
			ename: ename,
			edate: edate
		}).map(res => res.json().eid);

	}

}
