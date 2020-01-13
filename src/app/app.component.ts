import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { User } from './model/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'nature';

	constructor(private authService: AuthService) { }

	ngOnInit(): void {
		this.tryAutoLogin();
	}

	private tryAutoLogin() {
		
		const email = localStorage.getItem('emailUser');
		if (!email) { return; }

		const password = localStorage.getItem('passwordUser');
		if (!password) { return; }

		let user = new User();
		user.email = email;
		user.password = password;

		this.authService.autoLogin(user);

	}
}
