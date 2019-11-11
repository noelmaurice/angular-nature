import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AllTripsComponent } from './view/trips/all-trips/all-trips.component';
import {TripsService} from './service/trips.service';

const appRoutes: Routes = [
  { path: 'trips', component: AllTripsComponent },
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  { path: '**', redirectTo: 'trips' }
];

@NgModule({
  declarations: [
    AppComponent,
    AllTripsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TripsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
