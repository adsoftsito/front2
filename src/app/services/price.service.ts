import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IPrice } from '../interfaces/price';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class PriceService {
  constructor(private http: HttpClient) { }


  getPrices(): Observable<IPrice[]> {
    return this.http.get<IPrice[]>(API_URL + '/price', AUTH);
  }
 
  deletePrice(id): Observable<IPrice>{
    if(confirm('¿Eliminar precio?')){
      return this.http.delete<IPrice>(API_URL + '/price/' + id, AUTH);
    }
  }

  addPrice(priceAmount, tour_id, ticket_type_id): Observable<IPrice>{
    const obj = {
      priceAmount: priceAmount, 
      tour_id: tour_id, 
      ticket_type_id: ticket_type_id
    }
    return this.http.post<IPrice>(API_URL + '/price/add', obj, AUTH);
  }

  

  getByIdPrice(id): Observable<IPrice> {
    return this.http.get<IPrice>(API_URL + '/price/' + id, AUTH);
  }

  updatePrice(priceAmount, tour_id, ticket_type_id, id): Observable<IPrice> {
    const obj = {
      priceAmount: priceAmount, 
      tour_id: tour_id, 
      ticket_type_id: ticket_type_id
    };
    return this.http.put<IPrice>(API_URL + '/price/edit/' + id, obj, AUTH);
  }

}
