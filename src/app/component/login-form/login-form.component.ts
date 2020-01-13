import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	loginForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService) { }

	ngOnInit() {
		this.loginForm = this.fb.group({
			'email': ['', [
				Validators.required,
				Validators.email
			]],
			'password': ['', [
				Validators.required
			]]
		});
	}

	get email() { return this.loginForm.get('email') }
	get password() { return this.loginForm.get('password') }



	submit(): void {
		
		const user: any = this.authService.login(this.email.value, this.password.value).subscribe();
		
		if (user != null)
		{
			this.router.navigate(['home']);
		}
		else
		{
			this.loginForm.reset();
		}

	}
	
}
	