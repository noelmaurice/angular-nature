import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastrService } from './toastr.service';

@Injectable({
	providedIn: 'root'
})
export class ErrorService {

	constructor(private toastrService: ToastrService) { }

	public handleError(error: any, msg: string) {
		this.toastrService.showToastr({
			category: 'danger',
			message: msg
		});
		
		console.error(error);
      	console.log('Operation failed: ' + error.message);
		console.log('Operation failed: ' + msg);

		return throwError(error);
	}
}