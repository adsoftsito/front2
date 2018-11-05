import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../interfaces/usuario';
import { Observable } from 'rxjs/Observable';
// esto es para que sirva el map, si no no funciona
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  private _url: string = "https://ertourister.appspot.com/user";
  private _id: number;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this._url);
  }
  
  deleteUsuarios(id: number): Observable<IUsuario> {
    return this.http.delete<IUsuario>(this._url+"/"+id);
  }

  //returns a user searched by an id. this is used when you try to edit a user
  getIDUsuarios(id): Observable<IUsuario> {
    return this.http.get<IUsuario>(this._url+"/"+id);
  }
  
  addUsuarios(name, email, phone_number, password): Observable<IUsuario> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
      password: password
    };
    return this.http.post<IUsuario>(this._url+"/add", obj);
  }
  
  updateUsuarios(name, email, phone_number, id): Observable<IUsuario> {
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
    };
    return this.http.put<IUsuario>(this._url+"/"+id, obj);
  }



}
