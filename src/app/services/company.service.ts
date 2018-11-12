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

  addCompany(username, email, password): Observable<ICompany>{
    let obj = {
      username: username,
      email: email,
      password: password
    }
    return this.http.post<ICompany>(API_URL + '/company/add', obj);
  }

  getByIDAdmin(id): Observable<ICompany> {
    return this.http.get<ICompany>(API_URL + '/company/'+id);
  }

  updateCompany(username, email, password, id): Observable<ICompany> {
    let obj = {
      username: username,
      email: email,
      password: password,
    };
    return this.http.put<ICompany>(API_URL + '/company/edit/'+id, obj);
  }

}
