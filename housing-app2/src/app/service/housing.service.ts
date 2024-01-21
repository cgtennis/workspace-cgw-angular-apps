import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {HousingLocation} from "../housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';
  constructor(private http: HttpClient) { }

  getLocations(): Observable<HousingLocation[]>{
    return this.http.get<HousingLocation[]>(this.url)
      .pipe(
        catchError(this.handleError<HousingLocation[]>('getLocations', []))
      );
  }

  getLocationsById(id: number): Observable<HousingLocation | undefined>{
    return this.http.get<HousingLocation | undefined>(`${this.url}/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
