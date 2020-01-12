import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeComponent } from '../view/home/home.component';

import { AllTripsComponent } from '../component/trips/all-trips/all-trips.component';


@NgModule({
	declarations: [
		HomeComponent,
		AllTripsComponent
	],
	imports: [
		ViewRoutingModule,
		CommonModule
	]
})
export class ViewModule { }
