import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8091/users/login';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
}
