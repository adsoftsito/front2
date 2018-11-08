import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBus } from '../interfaces/bus';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class BusService {
  private _id: number;
  constructor(private http: HttpClient) { }

  getBuses(): Observable<IBus[]> {
    return this.http.get<IBus[]>(API_URL + '/bus');
  }
  
  deleteBus(id: number): Observable<IBus> {
    return this.http.delete<IBus>(API_URL + '/bus'+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDBus(id): Observable<IBus> {
    return this.http.get<IBus>(API_URL + '/bus'+"/"+id);
  }
  
  // addUsuarios(name, email, phone_number, password): Observable<IUser> {
  //   const obj = {
  //     name: name,
  //     email: email,
  //     phone_number: phone_number,
  //     password: password
  //   };
    // duda de porque le agrego juanca o jesus el add en el url, segun yo funcionaba sin el
  //   return this.http.post<IUser>(API_URL + '/user'+"/add", obj);
  // }
  
  // updateUsuarios(name, email, phone_number, id): Observable<IUser> {
  //   const obj = {
  //     name: name,
  //     email: email,
  //     phone_number: phone_number,
  //   };
  //   return this.http.put<IUser>(API_URL + '/user'+"/"+id, obj);
  // }



}

