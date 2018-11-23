import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IAdmin } from '../interfaces/admin';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }


  getAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(API_URL + '/admin', AUTH);
  }

  deleteAdmin(id): Observable<IAdmin> {
    if (confirm('¿Eliminar admin?')) {
      return this.http.delete<IAdmin>(API_URL + '/admin/' + id, AUTH);
    }
  }

  addAdmin(username, email, password): Observable<IAdmin> {
    const obj = {
      username: username,
      email: email,
      password: password
    }
    return this.http.post<IAdmin>(API_URL + '/admin/create', obj, AUTH);
  }

  getByIDAdmin(id): Observable<IAdmin> {
    return this.http.get<IAdmin>(API_URL + '/admin/' + id, AUTH);
  }

  updateAdmin(username, email, password, id): Observable<IAdmin> {
    const obj = {
      username: username,
      email: email,
      password: password,
    };
    return this.http.put<IAdmin>(API_URL + '/admin/edit/' + id, obj, AUTH);
  }

}
