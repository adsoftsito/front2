import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMural } from '../interfaces/mural';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class MuralService {
  private _id: number;
  constructor(private http: HttpClient) { }

  getMurales(): Observable<IMural[]> {
    return this.http.get<IMural[]>(API_URL + '/mural');
  }
  
  deleteMural(id: number): Observable<IMural> {
    return this.http.delete<IMural>(API_URL + '/mural'+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDMural(id): Observable<IMural> {
    return this.http.get<IMural>(API_URL + '/mural'+"/"+id);
  }

}
