import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IPrice } from '../interfaces/price';

const API_URL = environment.apiUrl;

@Injectable()
export class priceService {
  constructor(private http: HttpClient) { }


  getPrices(): Observable<IPrice[]> {
    return this.http.get<IPrice[]>(API_URL + '/price');
  }

  deletePrice(id): Observable<IPrice>{
    if(confirm("¿Eliminar precio?")){
      return this.http.delete<IPrice>(API_URL+'/price'+'/'+id);
    }
  }

  addprice(priceAmount, tour_id, ticket_type_id): Observable<IPrice>{
    let obj = {
      priceAmount: priceAmount, 
      tour_id: tour_id, 
      ticket_type_id: ticket_type_id
    }
    return this.http.post<IPrice>(API_URL + '/price/add', obj);
  }

  

  getByIdPrice(id): Observable<IPrice> {
    return this.http.get<IPrice>(API_URL + '/price/'+id);
  }

  updatePrice(priceAmount, tour_id, ticket_type_id, id): Observable<IPrice> {
    let obj = {
      priceAmount: priceAmount, 
      tour_id: tour_id, 
      ticket_type_id: ticket_type_id
    };
    return this.http.put<IPrice>(API_URL + '/price/edit/'+id, obj);
  }

}
