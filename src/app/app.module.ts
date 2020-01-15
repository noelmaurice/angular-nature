import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { BannerComponent } from './component/shared/banner/banner.component';
import { ToastrComponent } from './component/shared/toastr/toastr.component';

import { AuthService } from './service/auth.service';
import { TripsService } from './service/trips.service';
import { ToastrService } from './service/toastr.service';
import { ErrorService } from './service/error.service';
import { InMemoryDataService } from './service/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavbarComponent,
		BannerComponent,
		ToastrComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		CommonModule,
		ViewModule,
		AppRoutingModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
	],
	providers: [
		TripsService,
		AuthService,
		ToastrService,
		ErrorService	
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
