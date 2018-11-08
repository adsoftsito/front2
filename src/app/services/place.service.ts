import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { IPlace } from '../interfaces/place';

const API_URL = environment.apiUrl;



@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _id: number;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<IPlace[]> {
    return this.http.get<IPlace[]>(API_URL + '/place');
  }
  
  deletePlace(id: number): Observable<IPlace> {
    return this.http.delete<IPlace>(API_URL + '/place'+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDPlace(id): Observable<IPlace> {
    return this.http.get<IPlace>(API_URL + '/place'+"/"+id);
  }
}
