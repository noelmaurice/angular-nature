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
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { BannerComponent } from './component/shared/banner/banner.component';
import { AuthService } from './service/auth.service';


@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		FooterComponent,
		NavbarComponent,
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
		TripsService,
		AuthService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
