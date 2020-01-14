import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Trip } from '../model/trip';
import { ErrorService } from './error.service';

@Injectable({
	providedIn: 'root'
})
export class TripsService {

	private tripsUrl = 'api/trips'; // 'http://localhost:9090/trip/all';

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
