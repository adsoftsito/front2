import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ICompany } from '../interfaces/company';

const API_URL = environment.apiUrl;

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) { }


  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(API_URL + '/company');
  }

  deleteCompany(id): Observable<ICompany>{
    if(confirm("¿Eliminar compañia?")){
      return this.http.delete<ICompany>(API_URL+'/company'+'/'+id);
    }
  }

  addCompany(name, fullname, number, address, postal_code, rfc, ieps, iva): Observable<ICompany>{
    let obj = {
      name: name,
      fullname: fullname,
      number: number,
      address: address,
      postal_code: postal_code,
      rfc:  rfc,
      ieps: ieps, 
      iva: iva
    }
    return this.http.post<ICompany>(API_URL + '/company/add', obj);
  }

  getByIdCompany(id): Observable<ICompany> {
    return this.http.get<ICompany>(API_URL + '/company/'+id);
  }

  updateCompany(name, fullname, number, address, postal_code, rfc, ieps, iva, id): Observable<ICompany> {
    let obj = {
      name: name,
      fullname: fullname,
      number: number,
      address: address,
      postal_code: postal_code,
      rfc:  rfc,
      ieps: ieps, 
      iva: iva
    };
    return this.http.put<ICompany>(API_URL + '/company/edit/'+id, obj);
  }

}
