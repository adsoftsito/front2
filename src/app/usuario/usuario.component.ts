import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public usuarios = [];

  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(data => this.usuarios = data);
  }
  ngOnChanges(){
    this._usuarioService.getUsuarios().subscribe(data => this.usuarios = data);
  }
  deleteUsuario(id) {
    this._usuarioService.deleteUsuarios(id).subscribe(data => {console.log('Deleted'); this.ngOnChanges(); 
    });
  }

}
