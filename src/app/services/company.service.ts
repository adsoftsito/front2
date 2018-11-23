import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ICompany } from '../interfaces/company';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) { }


  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(API_URL + '/company', AUTH);
  }

  deleteCompany(id): Observable<ICompany> {
    if (confirm('¿Eliminar compañia?')) {
      return this.http.delete<ICompany>(API_URL + '/company/' + id, AUTH);
    }
  }

  addCompany(name, full_name, phone_number, address, postal_code, rfc, ieps, iva): Observable<ICompany>{
    const obj = {
      name: name,
      full_name: full_name,
      phone_number: phone_number,
      address: address,
      postal_code: postal_code,
      rfc:  rfc,
      ieps: ieps, 
      iva: iva
    }
    return this.http.post<ICompany>(API_URL + '/company/add', obj, AUTH);
  }

  getByIdCompany(id): Observable<ICompany> {
    return this.http.get<ICompany>(API_URL + '/company/' + id, AUTH);
  }

  updateCompany(name, full_name, phone_number, address, postal_code, rfc, ieps, iva, id): Observable<ICompany> {
    const obj = {
      name: name,
      full_name: full_name,
      phone_number: phone_number,
      address: address,
      postal_code: postal_code,
      rfc:  rfc,
      ieps: ieps, 
      iva: iva
    };
    return this.http.put<ICompany>(API_URL + '/company/edit/' + id, obj, AUTH);
  }

}
