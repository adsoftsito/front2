import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
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

  constructor(private route: ActivatedRoute, private router: Router, private service: UsuarioService, private fb: FormBuilder) { 
    this.createForm();
  }
      
  ngOnInit() {
    
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
      phone_number:[''],
      password: ['', Validators.required ],

      
   });
  }

  addUsuario(name, email, phone_number,password) {
    this.service.addUsuario(name, email, phone_number,password);
    // this.router.navigate(['index']);
    this.router.navigate(['/usuario']);
    this.getUsuarios();
}

 
}
