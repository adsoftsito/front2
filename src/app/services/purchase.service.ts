import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IPurchase } from '../interfaces/purchase';

const API_URL = environment.apiUrl;

@Injectable()
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<IPurchase[]>{
    return this.http.get<IPurchase[]>(API_URL+'/purchase');
  }

  getPurchaseById(id): Observable<IPurchase>{
    return this.http.get<IPurchase>(API_URL+'/purchase'+'/'+id);
  }
}
