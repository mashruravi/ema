import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'app/shared/services/application-state.service';
import { Router, NavigationStart } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    showTopbarShadow = false;

    constructor(
        private appStateService: ApplicationStateService,
        private router: Router
    ) { }


    ngOnInit() {

        this.router.events.filter((event) => {
            return event instanceof NavigationStart;
        }).subscribe(() => {
            this.showTopbarShadow = false;
        });

        const appContent: any = document.querySelector('#app-sidenav-container > .mat-sidenav-content');
        appContent.addEventListener('scroll', (event) => {
            this.appStateService.updateScroll(event.target.scrollTop);
        });
        // appContent.on('scroll', (event) => {
        //     console.log(event);
        // });

        this.appStateService.scrollAmount$.subscribe((val) => {
            this.showTopbarShadow = (val > 0) ? true : false;
        });

    }

}
