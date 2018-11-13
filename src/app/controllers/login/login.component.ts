import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admins: any;
  constructor(
    private http: HttpClient, 
    private service: AdminService,
    private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('adminID'));
  }

  getAdmins() {
    this.service.getAdmins().subscribe(res => {
      this.admins = res;
    });
  }

  loginAdmin(email, password){
    this._loginService.login(email, password).subscribe(res=>{

      if(res.id!=undefined){
        console.log(this._loginService.isLoggedIn());
        this._loginService.setLoggedIn(res.id);
        console.log(this._loginService.isLoggedIn());
        this.router.navigateByUrl('/dashboard');
      }
      else
        this._loginService.setLoggedIn(null);
    });
  }

  //NOTA: verificar que se haga logout para que se elimine el adminID del storage

}
