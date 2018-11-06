

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { UsuarioService } from '../services/user.service';
// formbuiler para no pelear con formcontrols, que suelen ser muy molestos
// validators para validar mis inputs
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.scss']
})
export class CreateUsuarioComponent implements OnInit {
  usuario: any;
  usuarios: any;
  // variable que utiliza mi formGroup para tener reactiver forms
  angForm: FormGroup;
  title = 'Agregar usuario';
  
  constructor(private route: ActivatedRoute, private router: Router, /*private service: UsuarioService,*/ private fb: FormBuilder) { 
    this.createForm();
  }
  
  ngOnInit() {
  }
  
  getUsuarios() {
    //this.service.getUsuarios().subscribe(res => {this.usuarios = res;});
  }
  
  createForm() {
    // schema que guarda los valores y validaciones
    // uso de form builder, la estructura es diferente
    // guarda a name y email en un solo grupo
    // The value for each control name is an array containing the initial value as the first item in the array.
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
        phone_number:[''],
        password: ['', Validators.required ],
      });
  }/*
    addUsuario(name, email, phone_number,password) {
      this.service.addUsuarios(name, email, phone_number,password).subscribe(data => this.usuarios = data);
      this.router.navigate(['/usuario']);
      this.getUsuarios();
    }*/
    
    
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
  