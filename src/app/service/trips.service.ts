import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

	public getTrip(id: number): Observable<Trip> {
		const url = this.tripsUrl + '/' + id;

		return this.http.get<Trip>(url).pipe(
			tap(_ => console.log('fetched trips id ' + id)),
			catchError(error => this.errorService.handleError(error, "getTrip id " + id))
		);
	}

	public deleteTrip(trip: Trip): Observable<Trip> {
		const url = this.tripsUrl + '/' + trip.id;
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.delete<Trip>(url, httpOptions).pipe(
			tap(_ => console.log('deleted trip id=' + trip.id)),
			catchError(error => this.errorService.handleError(error, 'deleteTrip'))
		);
	}

}
