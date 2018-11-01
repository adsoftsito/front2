import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

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

    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
      
   });
  }

  updateUsuarios(name,email) {
    this.route.params.subscribe(params => {
    this.service.updateUsuarios(name, email, params['id']);
    this.router.navigate(['usuario']);
    this.getUsuarios();
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = this.service.editUsuarios(params['id']).subscribe(res => {
        this.usuario = res;
        this.getUsuarios();
      });
    });
  }
}
