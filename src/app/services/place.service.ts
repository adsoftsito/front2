import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { IPlace } from '../interfaces/place';

const API_URL = environment.apiUrl;
const AUTH = environment.token;


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _id: number;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<IPlace[]> {
    return this.http.get<IPlace[]>(API_URL + '/place', AUTH);
  }

  getPlaceType():Observable<IPlace[]>{
    return this.http.get<IPlace[]>(API_URL + '/placetype', AUTH);  
  }
  
  addPlace(name,description,longitude,latitude,place_type_id,narrative):Observable<IPlace>{

    const obj ={
      name:name,
      description:description,
      longitude:longitude,
      latitude:latitude,
      place_type_id:place_type_id,
      narrative:narrative
    };

    return this.http.post<IPlace>(API_URL + '/place/add', obj, AUTH);
  }

  addPlaceType(name):Observable<IPlace>{
    const obj = {
      name: name
    };
    return this.http.post<IPlace>(API_URL + '/placetype/add', obj, AUTH);
  }

  addImage(url):Observable<IPlace>{
    const obj = {
    url: url
    }
    return this.http.post<IPlace>(API_URL + '/imageofplace/add', obj, AUTH);
  }
  
  deletePlace(id: number): Observable<IPlace> {
    return this.http.delete<IPlace>(API_URL + '/place/' + id, AUTH);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDPlace(id): Observable<IPlace> {
    return this.http.get<IPlace>(API_URL + '/place/' + id, AUTH);
  }
}
