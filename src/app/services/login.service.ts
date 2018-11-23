import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmin } from '../interfaces/admin';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _id: number;
  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('TOKEN', token);
  }

  isLoggedIn() {
    return localStorage.getItem('TOKEN') != null;
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('TOKEN');
  }

  login(email, password): Observable<IAdmin> {
    return this.http.post<IAdmin>(API_URL + '/admin' + '/login', {email: email, password: password});
  }
}
