import { Routes } from "@angular/router";
import { DashboardComponent } from "app/components/dashboard/dashboard.component";
import { MyEventsComponent } from "app/components/my-events/my-events.component";
import { CreateEventComponent } from "app/components/create-event/create-event.component";
import { EventDetailComponent } from "app/components/event-detail/event-detail.component";

export const routes: Routes = [
	{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "myevents", component: MyEventsComponent },
	{ path: "create", component: CreateEventComponent },
	{ path: "event/:id", component: EventDetailComponent },
	{ path: "create", component: CreateEventComponent }
];