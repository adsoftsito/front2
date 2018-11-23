import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class UserService {
  
  private _id: number;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<IUser[]> {
    console.log(AUTH);
    return this.http.get<IUser[]>(API_URL + '/user', AUTH);
  }
  
  deleteUsuarios(id: number): Observable<IUser> {
    return this.http.delete<IUser>(API_URL + '/user/' + id, AUTH);
  }

  getIDUsuarios(id: number): Observable<IUser> {
    return this.http.get<IUser>(API_URL + '/user/' + id, AUTH);
  }
  
  addUsuarios(name, email, phone_number, password): Observable<IUser> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
      password: password
    };
    return this.http.post<IUser>(API_URL + '/user/add', obj, AUTH);
  }
  
  updateUsuarios(name, email, phone_number, id): Observable<IUser> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
    };
    return this.http.put<IUser>(API_URL + '/user/' + id, obj, AUTH);
  }



}
