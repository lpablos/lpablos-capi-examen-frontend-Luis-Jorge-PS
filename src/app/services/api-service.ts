import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//  import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = "http://127.0.0.1:8000/api/get-users-with-domicilio-and-age";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<[]> {
    return this.httpClient.get<[]>(this.apiURL)
  }


}
