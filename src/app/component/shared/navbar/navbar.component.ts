import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


	public homePath = 'home';
	public loginPath = 'login';
	
	public user: User;
	private subscription: Subscription;

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.subscription =
			this.authService.user$.subscribe(user => this.user = user);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	public logout() {
		this.authService.logout();
	}

	public isActive(page: string): boolean {
		return this.router.isActive(page, true);
	}

	public navigate(page: string): void {
		this.router.navigate([page]);
	}
}
