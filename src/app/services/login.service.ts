import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmin } from '../interfaces/admin';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _id: number;
  email: string = "";
  password: string = "";
  private adminID: 'adminID';

  constructor(private http: HttpClient) { }

  setLoggedIn(option){
    localStorage.setItem(this.adminID, option);
  }

  isLoggedIn(){
    return (localStorage.getItem(this.adminID) != null);
  }

  login(email, password): Observable<IAdmin> {
    return this.http.post<IAdmin>(API_URL+'/admin'+'/login', {email: email, password: password});
  }
}
