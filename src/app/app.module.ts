import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { BannerComponent } from './component/shared/banner/banner.component';

import { AuthService } from './service/auth.service';
import { TripsService } from './service/trips.service';


@NgModule({
	declarations: [
		AppComponent,
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
