import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';
import { Status } from 'app/shared/models/event-model';

@Directive({
    selector: '[appFieldStatus]'
})
export class FieldStatusDirective implements OnInit {

    constructor(
        public el: ElementRef,
        public renderer: Renderer
    ) { }

    @Input() set appFieldStatus(status: Status) {

        switch (status) {

            case Status.SUCCESS:
                this.el.nativeElement.textContent = 'check_circle';
                this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
                break;

            case Status.ERROR:
                this.el.nativeElement.textContent = 'error';
                this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
                break;

            default:
                this.el.nativeElement.textContent = 'watch_later';
                this.renderer.setElementStyle(this.el.nativeElement, 'color', 'orange');
                break;

        }

    }

    ngOnInit() {

    }

}
