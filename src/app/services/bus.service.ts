import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBus } from '../interfaces/bus';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class BusService {
  private _id: number;
  constructor(private http: HttpClient) { }

  getBuses(): Observable<IBus[]> {
    return this.http.get<IBus[]>(API_URL + '/bus', AUTH);
  }
  
  deleteBus(id: number): Observable<IBus> {
    return this.http.delete<IBus>(API_URL + '/bus/' + id, AUTH);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getByIDBus(id): Observable<IBus> {
    return this.http.get<IBus>(API_URL + '/bus/' + id, AUTH);
  }
 

  addBus(numBus, availability, tour_id): Observable<IBus> {
    const obj = {
      numBus: numBus,
      availability: availability,
      tour_id: tour_id
    }
    return this.http.post<IBus>(API_URL + '/bus/add', obj, AUTH);
  }

  updateBus(numBus, availability, tour_id, id): Observable<IBus> {
    const obj = {
      numBus: numBus,
      availability: availability,
      tour_id : tour_id
    };
    return this.http.put<IBus>(API_URL + '/bus/edit/' + id, obj, AUTH);
  }




}

