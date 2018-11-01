import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  usuario: any;
  usuarios: any;
  angForm: FormGroup;
  title = 'Editar Usuarios';
  constructor(private route: ActivatedRoute, private router: Router, private service: UsuarioService, private fb: FormBuilder) {
    this.createForm();
   }
   getUsuarios() {
    this.service.getUsuarios().subscribe(res => {
      this.usuarios = res;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      codigo: ['', Validators.required ],
      nombre: ['', Validators.required ]
      
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
