import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './interfaces/usuario';
import { Observable } from 'rxjs/Observable';
// esto es para que sirva el map, si no no funciona
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  private _url: string = "https://ertourister.appspot.com/user";
  private _body: object;
  private _id: number;

  constructor(private http: HttpClient) { }

  // metodo que agrega un nuevo usuario
  /*addUsuario(name, email, phone_number, password) {
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Nuevo usuario creado'));
  }*/

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this._url);
  }
  
  deleteUsuarios(id: number): Observable<IUsuario[]> {
    return this.http.delete<IUsuario[]>(this._url+"/"+id);
  }
  /*
  addUsuarios(): Observable<IUsuario[]> {
    return this.http.post<IUsuario[]>(this._url+"/add", this._body);
  }
  updateUsuarios(): Observable<IUsuario[]> {
    return this.http.put<IUsuario[]>(this._url+"/"+this._id, this._body);
  }*/

  // metodo que borra usuarios
  /*deleteUsuario(id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              console.log("deleted ");
              return res;
            });
  }*/
  // metodo que edita usuarios
  /*editUsuarios(id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }*/

  /*updateUsuarios(name, email, phone_number,id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;

    const obj = {
      name: name,
      email: email,
      phone_number: phone_number
    };
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
      
  }*/


}
