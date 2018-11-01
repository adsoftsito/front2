import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// esto es para que sirva el map, si no no funciona
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  result: any;
  constructor(private http: HttpClient) { }

  // addUsuario(codigo, nombre) {
  //   // aqui tendriamos que poner nuestro endpoint
  //   const uri = 'https://ertourister.appspot.com/user';
  //   // duda de para que es el objeto 
  //   const obj = {
  //     codigo: codigo,
  //     nombre: nombre 
  //   };
  //   this
  //     .http
  //     .post(uri, obj)
  //     .subscribe(res =>
  //         console.log('Done'));
  // }




  getAdmins() {
    //const uri = 'http://localhost:4000/coins';
    const uri = 'https://ertourister.appspot.com/admin';
    return this
            .http
            .get(uri)
            // duda de para que chihuahuas es el map 
            .map(res => {
              return res;
            });
  }

  deleteAdmins(id) {
    const uri = 'https://ertourister.appspot.com/admin/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              return res;
            });
  }

  


}
