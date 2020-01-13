import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { LoginPageComponent } from './login/login-page.component';


const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ViewRoutingModule {
	
}
