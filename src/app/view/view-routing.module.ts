import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { DetailTripComponent } from '../component/trips/detail-trip/detail-trip.component';


const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'detail/:id', component: DetailTripComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ViewRoutingModule {
	
}
