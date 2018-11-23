import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDate } from '../interfaces/date';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable({
  providedIn: 'root'
})
export class DateinformationService {
  private _id: number;

  constructor(private http: HttpClient) { }

  getInformation(): Observable<IDate[]> {
    return this.http.get<IDate[]>(API_URL + '/dateinformation', AUTH);
  }
  getDates(): Observable<IDate[]> {
    return this.http.get<IDate[]>(API_URL + '/dateinterval', AUTH);
  }
  getHours(): Observable<IDate[]> {
    return this.http.get<IDate[]>(API_URL + '/hourinterval', AUTH);
  }
  
  deleteDate(id: number): Observable<IDate> {
    return this.http.delete<IDate>(API_URL + '/dateinformation/' + id, AUTH);
  }
 
  // //returns a user searched by an id. this is used when you try to edit a user
  // getIDDate(id): Observable<IDate> {
  //   return this.http.get<IDate>(API_URL + '/dateinformation'+"/"+id);
  // }

  // Funcion para agregar a la tabla de dateInterval
  addDate(start_date, end_date, service): Observable<IDate> {
    const obj = {
      start_date: start_date,
      end_date : end_date,
      service: service
    };
    return this.http.post<IDate>(API_URL + '/dateinterval/add', obj, AUTH);
  }

  // Funcion para agregar a la tabla de hourInterval

  addHour(start_time,end_time,frequency):Observable<IDate>{
    const obj={
      start_time: start_time,
      end_time : end_time,
      frequency : frequency
    };

    return this.http.post<IDate>(API_URL + '/hourinterval/add', obj, AUTH);
  }

  addInformationDate(date_id, hour_id):Observable<IDate> {
    const obj = {
      date_id: date_id,
      hour_id: hour_id
    };

    return this.http.post<IDate>(API_URL + '/dateinformation/add', obj, AUTH);
  }

  getByIdDateInfo(id): Observable<IDate> {
    return this.http.get<IDate>(API_URL + '/dateinformation/' + id, AUTH);
  }



  getByIDDate(id): Observable<IDate> {
    return this.http.get<IDate>(API_URL + '/dateinterval/' + id, AUTH);
  }

}
