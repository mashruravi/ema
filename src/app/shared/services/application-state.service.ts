import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApplicationStateService {

    private scrollAmount = new Subject<number>();

    scrollAmount$ = this.scrollAmount.asObservable();

    updateScroll(value: number) {
        this.scrollAmount.next(value);
    }

    constructor() { }

}
