import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

 declare const $: any;

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
    localStorage.removeItem('adminID');
  }

  getAdmins() {
    this.service.getAdmins().subscribe(res => {
      this.admins = res;
    });
  }

  loginAdmin(email, password) {
    this._loginService.login(email, password).subscribe(res => {
      this._loginService.setToken(res.token, '' + res.id);
      this.showNotification(res, 'top', 'right');
      this.router.navigateByUrl('/dashboard');
    }, err => {
      this.showNotification(err.error, 'top', 'right');
    });
  }

  showNotification(data, from, align) {
    $.notify({
        message: data.info
    }, {
        type: data.color,
        timer: 500,
        placement: {
            from: from,
            align: align
        },
        template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
                      <button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>
                      <span data-notify="icon"></span>
                      <span data-notify="message">{2}</span>
                      <div class="progress" data-notify="progressbar">
                          <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                          </div>
                      </div>
                  </div>`
      });
    }

  // NOTA: verificar que se haga logout para que se elimine el adminID del storage

}
