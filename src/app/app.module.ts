import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'app/shared/modules/material/material.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

import 'hammerjs';
import { MyEventsComponent } from './my-events/my-events.component';
import { HomeComponent } from './home/home.component';
import { EventService } from 'app/shared/services/event.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EditEventComponent } from './event-detail/edit-event/edit-event.component';
import { FieldStatusDirective } from './shared/directives/field-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MyEventsComponent,
    HomeComponent,
    CreateEventComponent,
    EventDetailComponent,
    EditEventComponent,
    FieldStatusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ EventService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
