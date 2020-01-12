import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Trip} from '../model/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private tripsUrl = 'http://localhost:9090/trip/all';


  constructor(private http: HttpClient) { }


  /** GET trips */
  // le flux retourné contiendra un tableau de voyages
  getTrips(): Observable<Trip[]> {
    // requête HTTP sur l'URL passé en paramètre : retourne un flux qui contiendra un tableau de voyages

    return this.http.get<Trip[]>(this.tripsUrl).pipe(
      // affichage d'un message sur l'action
      tap(_ => this.log('fetched trips')),
      // gestion des erreurs éventuelles
      catchError(this.handleError('getTrips', []))
    );
  }

  /* log */
  private log(log: string) {
    console.info(log);
  }

  /* handleError */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation + ' failed: ' + error.message);

      // of() => le résultat est retourné en tant qu'observateur du type générique
      return of(result as T);
    };
  }

}
