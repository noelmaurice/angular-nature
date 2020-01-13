import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { USERS } from '../model/mock-users';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private user: BehaviorSubject<User | null> = new BehaviorSubject(null);
	public readonly user$: Observable<User | null> = this.user.asObservable();


	constructor(
		private router: Router,
		private errorService: ErrorService) { }

	public login(email: string, password: string): Observable<User | any> {

		// utilisateur unique => pas nécessaire d'interroger un web service
		if (email == USERS[0].email && password == USERS[0].password) 
		{
			return of(USERS[0]).pipe (
				tap(user => this.user.next(user)),
				tap(user => this.saveAuthData(user)),
				catchError(error => this.errorService.handleError(error, 'Login impossible'))
			);
		}
		else
		{
			return of(null).pipe (
				catchError(error => this.errorService.handleError(error, 'Login impossible'))
			);
		}
	}

	public autoLogin(user: User) {
		this.user.next(user);
		this.login(user.email, user.password)
		.subscribe(
			_ => this.router.navigate(['/home'])
		);
	}

	public logout(): void {
		localStorage.removeItem('emailUser');
		localStorage.removeItem('passwordUser');

		this.user.next(null);
		this.router.navigate(['/home'])
	}

	private saveAuthData(user: User) {
		localStorage.setItem('emailUser', user.email);
		localStorage.setItem('passwordUser', user.password);
	}

}