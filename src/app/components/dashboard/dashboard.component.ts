import { Component, OnInit, HostBinding } from '@angular/core';
import { appearAnimation } from "app/animations";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [appearAnimation]
})
export class DashboardComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.position') hostPosition = "absolute";

  constructor() { }

  ngOnInit() {
  }

}
