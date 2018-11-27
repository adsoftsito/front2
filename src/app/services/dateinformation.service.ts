import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { IDateInformation } from 'app/interfaces/dateinformation';
import { IDate } from 'app/interfaces/date';
import { IHour } from 'app/interfaces/hour';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable({
  providedIn: 'root'
})
export class DateinformationService {
  private _id: number;

  constructor(private http: HttpClient) { }

  getInformation(): Observable<IDateInformation[]> {
    return this.http.get<IDateInformation[]>(API_URL + '/dateinformation', AUTH);
  }

  getDates(): Observable<IDate[]> {
    return this.http.get<IDate[]>(API_URL + '/dateinterval', AUTH);
  }

  getHours(): Observable<IHour[]> {
    return this.http.get<IHour[]>(API_URL + '/hourinterval', AUTH);
  }
  
  deleteDateInfo(id: number): Observable<IDateInformation> {
    return this.http.delete<IDateInformation>(API_URL + '/dateinformation/' + id, AUTH);
  }

  addDate(start_date, end_date, service): Observable<IDate> {
    const obj = {
      start_date: start_date,
      end_date : end_date,
      service: service
    };
    return this.http.post<IDate>(API_URL + '/dateinterval/add', obj, AUTH);
  }

  addHour(start_time,end_time,frequency):Observable<IHour>{
    const obj={
      start_time: start_time,
      end_time : end_time,
      frequency : frequency
    };
    return this.http.post<IHour>(API_URL + '/hourinterval/add', obj, AUTH);
  }

  addInformationDate(date_id, hour_id): Observable<IDateInformation> {
    const obj = {
      date_id: date_id,
      hour_id: hour_id
    };
    return this.http.post<IDateInformation>(API_URL + '/dateinformation/add', obj, AUTH);
  }

  getDateInfoById(id): Observable<IDateInformation> {
    return this.http.get<IDateInformation>(API_URL + '/dateinformation/' + id, AUTH);
  }

  getDateById(id): Observable<IDate> {
    return this.http.get<IDate>(API_URL + '/dateinterval/' + id, AUTH);
  }

  getHourById(id): Observable<IHour> {
    return this.http.get<IHour>(API_URL + '/hourinterval/' + id, AUTH);
  }

  updateHour(id, startTime, endTime, frequency): Observable<IHour> {
    const obj = {
      start_time: startTime,
      end_time: endTime,
      frequency: frequency
    }
    return this.http.put<IHour>(API_URL + '/hourinterval/edit/' + id, obj, AUTH);
  }

  updateDate(id, startDate, endDate, service): Observable<IDate> {
    const obj = {
      start_date: startDate,
      end_date: endDate,
      service: service
    }
    return this.http.put<IDate>(API_URL + '/dateinterval/edit/' + id, obj, AUTH);
  }

}
