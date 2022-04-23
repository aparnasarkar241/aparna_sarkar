import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private url="https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }
  
  getuser(): Observable<any>{
    return this.http.get(this.url)
  }
}
