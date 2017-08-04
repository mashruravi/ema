import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { EventModel } from 'app/shared/models/event-model';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

  readonly url = '/ema/data/services/events.xsjs';

  constructor( private http: Http ) { }

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

}
