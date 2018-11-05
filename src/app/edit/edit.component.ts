import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
// formbuiler para no pelear con formcontrols, EmailValidator, que suelen ser muy molestos
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
    this.service.getUsuarios().subscribe(res => {this.usuarios = res;});
  }

  createForm() {
    this.angForm = this.fb.group({
      // hace que el valor sea requerido
      name: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.required ])], //checar validators
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      phone_number:['']
      
   });
  }

  updateUsuario(name,email,phone_number) {
    this.route.params.subscribe(params => {this.service.updateUsuarios(name, email, phone_number, params['id']).subscribe(data => {console.log('Updated');});
    this.router.navigate(['/usuario']);
    this.getUsuarios();
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {this.usuario = this.service.getIDUsuarios(params['id']).subscribe(res => {this.usuario = res;});});
  }


  account_validation_messages = {
    'name': [
      { type: 'required', message: 'Tiene que agregar un nombre' },
      { type: 'minlength', message: 'El nombre de usuario debe de tener por lo menos 3 caracteres' },
      { type: 'maxlength', message: 'El nombre de usuario no debe de tener más de 25 caracters' }
    ],
    'email': [
      { type: 'required', message: 'Tiene que agregar un correo' },
      { type: 'pattern', message:'El correo debe de seguir el siguiente formato: ejemplo@correo.com'}
    ]
  }
    
}
