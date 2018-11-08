import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admins: any;
  constructor(private http: HttpClient, private service: AdminService) { }

  ngOnInit() {
  }

  getAdmins() {
    this.service.getAdmins().subscribe(res => {
      this.admins = res;
      for (let i = 0; i<this.admins.length;i++){
        if(res[i].email == 'ana@gmail.com' && res[i].username == 'ana'){
          alert(res[i].password);
        }
      }
       
     
      
    });
  }

}
