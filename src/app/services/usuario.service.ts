import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../interfaces/usuario';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
// esto es para que sirva el map, si no no funciona
import 'rxjs/add/operator/map';
//variable que guarda mi endpoint
const API_URL = environment.apiUrl;
@Injectable()
export class UsuarioService {
  
  // private _url: string = "https://ertourister.appspot.com/user";
  private _id: number;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(API_URL + '/user');
  }
  
  deleteUsuarios(id: number): Observable<IUsuario> {
    return this.http.delete<IUsuario>(API_URL + '/user'+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDUsuarios(id): Observable<IUsuario> {
    return this.http.get<IUsuario>(API_URL + '/user'+"/"+id);
  }
  
  addUsuarios(name, email, phone_number, password): Observable<IUsuario> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
      password: password
    };
    // duda de porque le agrego juanca o jesus el add en el url, segun yo funcionaba sin el
    return this.http.post<IUsuario>(API_URL + '/user'+"/add", obj);
  }
  
  updateUsuarios(name, email, phone_number, id): Observable<IUsuario> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
    };
    return this.http.put<IUsuario>(API_URL + '/user'+"/"+id, obj);
  }



}
