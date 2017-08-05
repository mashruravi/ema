import { Routes } from '@angular/router';
import { MyEventsComponent } from 'app/my-events/my-events.component';
import { HomeComponent } from 'app/home/home.component';
import { CreateEventComponent } from 'app/create-event/create-event.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'my-events', component: MyEventsComponent },
    { path: 'create', component: CreateEventComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
    // { path: '**', component: PageNotFoundComponent }
];
