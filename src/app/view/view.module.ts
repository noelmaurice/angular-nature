import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ViewRoutingModule } from './view-routing.module';

import { AllTripsComponent } from '../component/trips/all-trips/all-trips.component';
import { LoginFormComponent } from '../component/login-form/login-form.component';
import { NotFoundComponent } from '../component/shared/not-found/not-found.component';


import { HomePageComponent } from '../view/home/home-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { NotFoundPageComponent } from './not-found/not-found-page.component';


@NgModule({
	declarations: [
		AllTripsComponent,
		LoginFormComponent,
		NotFoundComponent,
		
		HomePageComponent,
		LoginPageComponent,
		NotFoundPageComponent
	],
	imports: [
		ViewRoutingModule,
		
		CommonModule,
		ReactiveFormsModule,
	],
	exports: [
		NotFoundPageComponent
	]
})
export class ViewModule { }
