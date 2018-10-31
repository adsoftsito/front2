import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios: any;
  // llamo el servicio 
  constructor(private http: HttpClient, private service: UsuarioService) {}

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.service.getUsuarios().subscribe(res => {
       console.log(res);
      this.usuarios = res;
    });
  }

  deleteUsuario(id) {
    this.service.deleteUsuario(id).subscribe(res => {
      console.log('Deleted');
      this.getUsuarios(); 
    });
  }

}
