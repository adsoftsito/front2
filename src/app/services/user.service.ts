import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
const API_URL = environment.apiUrl;
@Injectable()
export class UserService {
  
  private _id: number;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<IUser[]> {
    
    return this.http.get<IUser[]>(API_URL + '/user');
  }
  
  deleteUsuarios(id: number): Observable<IUser> {
    return this.http.delete<IUser>(API_URL + '/user'+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDUsuarios(id): Observable<IUser> {
    return this.http.get<IUser>(API_URL + '/user'+"/"+id);
  }
  
  addUsuarios(name, email, phone_number, password): Observable<IUser> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
      password: password
    };
    return this.http.post<IUser>(API_URL + '/user'+"/add", obj);
  }
  
  updateUsuarios(name, email, phone_number, id): Observable<IUser> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
    };
    return this.http.put<IUser>(API_URL + '/user'+"/"+id, obj);
  }



}
