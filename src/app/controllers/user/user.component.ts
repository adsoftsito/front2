import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { throwToolbarMixedModesError } from '@angular/material';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  public usuarios = [];
  selectedUsuario: any;

  constructor(private _usuarioService: UserService) {}

  ngOnInit() {
    // console.log(this._usuarioService.getUsuarios()[0].email);
    this._usuarioService.getUsuarios()
    .subscribe(data => this.usuarios = data
    );
    // console.log(this.usuarios.length);
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
      // console.log(usuario.email);
      this.ngOnChanges();
    });
  }

}
