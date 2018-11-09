import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDate } from '../interfaces/date';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DateinformationService {
  private _id: number;

  constructor(private http: HttpClient) { }

  getDates(): Observable<IDate[]> {
    return this.http.get<IDate[]>(API_URL + '/dateinformation');
  }
  
  deleteDate(id: number): Observable<IDate> {
    return this.http.delete<IDate>(API_URL + '/dateinformation'+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDDate(id): Observable<IDate> {
    return this.http.get<IDate>(API_URL + '/dateinformation'+"/"+id);
  }

  addDate(start_date,end_date):Observable<IDate>{
    const obj={
      start_date: start_date,
      end_date : end_date,
      
    };
    return this.http.post<IDate>(API_URL + '/dateinformation'+"/add",obj);
  }
}
