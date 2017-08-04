import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    @Output() menuToggle: EventEmitter<null> = new EventEmitter();
    @Output() appMenuToggle: EventEmitter<null> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onSidenavToggleClick(): void {
        this.menuToggle.emit();
    }

    onAppMenuToggleClick(): void {
        this.appMenuToggle.emit();
    }

}
