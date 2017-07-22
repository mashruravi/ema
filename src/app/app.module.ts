import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule, MdIconModule, MdDatepickerModule, MdNativeDateModule, MdSnackBar } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

import { routes } from "./routes";
import { RouterModule } from "@angular/router";
import { UserService } from "app/services/user.service";
import { EventsService } from "app/services/events.service";
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    MyEventsComponent,
    CreateEventComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [UserService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
