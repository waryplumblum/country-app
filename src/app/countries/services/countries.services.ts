import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode( code:string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/alpha/${ code }`;
    return this.http.get<Country[]>( url )
    .pipe(
      catchError( error => of([]))
    );
  }

  searchCapital( term:string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url )
    .pipe(
      catchError( error => of([]))
    );
  }

  searchCountry( term:string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>( url )
    .pipe(
      catchError( error => of([]))
    );
  }

  searchRegion( region:string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url )
    .pipe(
      catchError( error => of([]))
    );
  }
}
