import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';

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
       console.log(res);
      this.admins = res;
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





