import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { EventModel } from 'app/shared/models/event-model';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

    readonly url = '/ema/data/services/events.xsjs';

    constructor(private http: Http) { }

    getEvents(): Observable<Array<EventModel>> {
        return this.http.get(this.url)
            .map((res) => {
                const jsonResponse = res.json();

                const events = jsonResponse.map((obj) => {

                    return new EventModel(
                        obj.eid,
                        obj.ename,
                        obj.edate,
                        obj.etime,
                        obj.location,
                        obj.description,
                        obj.createdBy,
                        obj.createdOn
                    );

                });

                return events;

            });
    }

    getEvent(eventId: string): Observable<EventModel> {

        return this.http.get(`${this.url}?eid=${eventId}`).map(res => {

            const event = res.json();

            return new EventModel(
                event.eid,
                event.ename,
                event.edate,
                event.etime,
                event.location,
                event.description,
                event.createdBy,
                event.createdOn
            );

        });

    }

    convertDateToString(date: Date): string {

        const simpleDate = new Date(date).toLocaleDateString();
        const dateParts = simpleDate.split('/');
        const paddedDay = '0' + dateParts[1];
        const day = paddedDay.substr(-2);
        const paddedMonth = '0' + dateParts[0];
        const month = paddedMonth.substr(-2);
        const dbDateFormat = dateParts[2] + month + day;

        return dbDateFormat;

    }

    createEvent(name: string, date?: Date, location?: string, description?: string): Observable<EventModel> {

        const payload = {
            ename: name,
            edate: date ? this.convertDateToString(date) : null,
            location: location,
            description: description
        };

        return this.http.post(this.url, payload)
            .map((res) => {
                const event = res.json();
                return new EventModel(
                    event.eid,
                    event.ename,
                    event.edate,
                    event.etime,
                    event.location,
                    event.description,
                    event.createdBy,
                    event.createdOn
                );
            });

    }

    updateEvent(evt: EventModel) {


        return this.http.put(this.url, {
            ename: evt.name,
            edate: this.convertDateToString(evt.date),
            location: evt.location,
            etime: evt.time,
            description: evt.description,
            eid: evt.id
        }).catch((err) => {
            return Observable.throw(err);
        });

    }

}
