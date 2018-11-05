import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {

  public usuarios = [];
  selectedUsuario: any;

  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit() {
    this._usuarioService.getUsuarios()
    .subscribe(data => this.usuarios = data);
    this.selectedUsuario = "";
  }
  ngOnChanges(){
    this._usuarioService.getUsuarios()
    .subscribe(data => this.usuarios = data);
    this.selectedUsuario = "";
  }
  deleteUsuario(id) {
    if(confirm("Desea eliminar usuario?")){
      this._usuarioService.deleteUsuarios(id).subscribe(data => {
        this.ngOnChanges(); 
      });
    }
  }

  readyForEdition(usuario){
    this.selectedUsuario = usuario;
  }

  editUsuario(usuario){
    this._usuarioService.updateUsuarios(usuario.name, usuario.email, usuario.phone_number, usuario.id)
    .subscribe((res)=>{
      this.ngOnChanges();
    });
  }

}
