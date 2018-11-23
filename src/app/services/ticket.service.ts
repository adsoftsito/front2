import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ITicket } from '../interfaces/ticket';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(API_URL + '/ticket', AUTH);
  }
}
