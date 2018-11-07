import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admins: any;

  constructor(private http: HttpClient, private service: AdminService) { }

  ngOnInit() {
    this.getAdmins();
  }

  getAdmins() {
    this.service.getAdmins().subscribe(res => {
      this.admins = res;
      // for (let i = 0; i<this.admins.length;i++){
      //   if(res[i].email == 'ana@gmail.com' && res[i].username == 'ana'){
      //     alert(res[i].password);
      //   }
      // }
      // console.log(res.email)
    });
  }

  deleteAdmins(id) {
    this.service.deleteAdmins(id).subscribe(res => {
      console.log('Deleted');
      this.getAdmins(); 
    });
  }

}


// el viejo





