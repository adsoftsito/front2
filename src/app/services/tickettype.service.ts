import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ITicketType } from '../interfaces/tickettype';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class TicketTypeService {
  constructor(private http: HttpClient) { }


  getTicketTypes(): Observable<ITicketType[]> {
    return this.http.get<ITicketType[]>(API_URL + '/tickettype', AUTH);
  }
 /* RIGHT NOW WE ARE NOT USING THIS
  deleteTicketType(id): Observable<ITicketType>{
    if(confirm("¿Eliminar ticket type?")){
      return this.http.delete<ITicketType>(API_URL+'/tickettype'+'/'+id);
    }
  }

  addTicketType(name, description): Observable<ITicketType>{
    let obj = {
      name: name, 
      description: description, 
    }
    return this.http.post<ITicketType>(API_URL + '/tickettype/add', obj);
  }

  

  getByIdTicketType(id): Observable<ITicketType> {
    return this.http.get<ITicketType>(API_URL + '/tickettype/'+id);
  }

  updateTicketType(name, description, id): Observable<ITicketType> {
    let obj = {
      name: name, 
      description: description, 
    };
    return this.http.put<ITicketType>(API_URL + '/tickettype/edit/'+id, obj);
  }*/

}
