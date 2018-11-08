import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IAdmin } from '../interfaces/admin';

const API_URL = environment.apiUrl;
@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }


  getAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(API_URL + '/admin');
  }

  deleteAdmin(id): Observable<IAdmin>{
    if(confirm("¿Eliminar admin?")){
      return this.http.delete<IAdmin>(API_URL+'/admin'+'/'+id);
    }
  }

  addAdmin(username, email, password): Observable<IAdmin>{
    let obj = {
      username: username,
      email: email,
      password: password
    }
    return this.http.post<IAdmin>(API_URL + '/admin', obj);
  }

}
