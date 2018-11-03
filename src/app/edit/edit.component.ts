import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
// formbuiler para no pelear con formcontrols, que suelen ser muy molestos
// validators para validar mis inputs
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// viene por default al crear un componente ccon el cli de angular
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  usuario: any;
  usuarios: any;
  // variable que utiliza mi formGroup para tener reactiver forms
  angForm: FormGroup;
  title = 'Editar Usuarios';

  // importo en el constructor el form builder service al igual que el servicio que estoy usando y el router
  constructor(private route: ActivatedRoute, private router: Router, private service: UsuarioService, private fb: FormBuilder) {
    this.createForm();
   }
   getUsuarios() {
    this.service.getUsuarios().subscribe(res => {
      this.usuarios = res;
    });
  }

  createForm() {
    // schema que guarda los valores y validaciones
    // uso de form builder, la estructura es diferente
    // guarda a name y email en un solo grupo
    // The value for each control name is an array containing the initial value as the first item in the array.
    this.angForm = this.fb.group({
      // hace que el valor sea requerido
      name: ['', Validators.required ], //checar validators
      email: ['', Validators.required ],
      phone_number:['']
      
   });
  }

  updateUsuarios(name,email,phone_number) {
    this.route.params.subscribe(params => {
    this.service.updateUsuarios(name, email, phone_number params['id']);
    // regreso a usuario
    // this.router.navigate(['usuario']);
    
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = this.service.editUsuarios(params['id']).subscribe(res => {
        this.usuario = res;
        // this.getUsuarios();
      });
    });
  }
}
