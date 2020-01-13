import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ViewRoutingModule } from './view-routing.module';
import { HomePageComponent } from '../view/home/home-page.component';

import { AllTripsComponent } from '../component/trips/all-trips/all-trips.component';
import { LoginFormComponent } from '../component/login-form/login-form.component';
import { LoginPageComponent } from './login/login-page.component';


@NgModule({
	declarations: [
		AllTripsComponent,
		LoginFormComponent,
		
		HomePageComponent,
		LoginPageComponent,
	],
	imports: [
		ViewRoutingModule,
		
		CommonModule,
		ReactiveFormsModule
	]
})
export class ViewModule { }
