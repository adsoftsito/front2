import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// esto es para que sirva el map, si no no funciona
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  result: any;
  constructor(private http: HttpClient) { }

  // metodo que agrega un nuevo usuario
  addUsuario(name, email, phone_number,password) {
    // aqui tendriamos que poner nuestro endpoint
    const uri = 'https://ertourister.appspot.com/user';
    // duda de para que es el objeto 
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number,
      password: password
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Nuevo usuario creado'));
  }

  // metodo que obtiene usuarios
  getUsuarios() {
    
    const uri = 'https://ertourister.appspot.com/user';
    return this
            .http
            .get(uri)
            // duda de para que chihuahuas es el map 
            .map(res => {
              return res;
            });
  }
  // metodo que borra usuarios
  deleteUsuario(id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              console.log("deleted ");
              return res;
            });
  }
  // metodo que edita usuarios
  editUsuarios(id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateUsuarios(name, email, phone_number,id) {
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
      
  }


}
