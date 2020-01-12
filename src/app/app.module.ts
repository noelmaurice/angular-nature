import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/shared/not-found/not-found.component';

import { TripsService } from './service/trips.service';
import { ViewModule } from './view/view.module';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { BannerComponent } from './component/shared/banner/banner.component';


@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		FooterComponent,
		HeaderComponent,
		BannerComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		ViewModule,
		AppRoutingModule
	],
	providers: [
		TripsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }