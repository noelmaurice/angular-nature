import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Trip } from '../model/trip';
import { ErrorService } from './error.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class TripsService {

	private tripsUrl = environment.server.serverURL;

	constructor(
		private http: HttpClient,
		private errorService: ErrorService) { }

	public getTrips(): Observable<Trip[]> {
		return this.http.get<Trip[]>(this.tripsUrl).pipe(
			tap(_ => console.log(`fetched trips`)),
			catchError(error => this.errorService.handleError(error, "getTrips"))
		);
	}
}
