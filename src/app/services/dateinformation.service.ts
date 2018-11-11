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

  // //returns a user searched by an id. this is used when you try to edit a user
  // getIDDate(id): Observable<IDate> {
  //   return this.http.get<IDate>(API_URL + '/dateinformation'+"/"+id);
  // }

  // Funcion para agregar a la tabla de dateInterval
  addDate(start_date,end_date,service):Observable<IDate>{
    const obj={
      start_date: start_date,
      end_date : end_date,
      service: service
      
    };
    return this.http.post<IDate>(API_URL + '/dateinterval'+"/add",obj);
  }

  // Funcion para agregar a la tabla de hourInterval

  addHour(start_time,end_time,frequency):Observable<IDate>{
    const obj={
      start_time: start_time,
      end_time : end_time,
      frequency : frequency
    };

    return this.http.post<IDate>(API_URL+ '/hourinterval'+ "/add",obj);
  }

  addInformationDate(date_id, hour_id):Observable<IDate>{
    const obj ={
      date_id :date_id,
      hour_id :hour_id
    };

    return this.http.post<IDate>(API_URL+ '/informationdate'+ "/add",obj);
  }

  
}
