import { Component, OnInit} from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  public arrayOfAdmins = [];

  constructor(
    private _adminService: AdminService, 
    private _modalService: NgbModal) { }

  openModal(){
    const modalRef = this._modalService.open(NgbdModalAddAdmin, { size: 'lg' });
  }

  fetch(){
    this._adminService.getAdmins()
    .subscribe(res => {
      this.arrayOfAdmins = res;
    });
  }

  ngOnInit() {
    this.fetch();
  }

  ngOnChanges(){
    this.fetch();
  }

  getAdmins() {
    this._adminService.getAdmins()
    .subscribe(res => {
      this.arrayOfAdmins = res;
    });
  }

  deleteAdmin(id){
    this._adminService.deleteAdmin(id)
    .subscribe(res => {
      this.fetch();
    });
  }

}

@Component({
  template: `
    <div class="modal-header ">
      <h4 class="modal-title" id="modal-title"></h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" >
              <i class="fa fa-user"></i>
            </span>
          </div>
          <input type="text" class="form-control" [(ngModel)]="currentAdmin.username" placeholder="Nombre de usuario">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" >
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <input type="email" class="form-control" [(ngModel)]="currentAdmin.email" placeholder="Correo electrónico">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" >
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input type="password" class="form-control" [(ngModel)]="currentAdmin.password" placeholder="Contraseña">
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" (click)="activeModal.close()">Cancel</button>
      <button type="button" ngbAutofocus class="btn btn-success" (click)="addAdmin(currentAdmin)">Ok</button>
    </div>
  `
})

export class NgbdModalAddAdmin{ 

  currentAdmin = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private _adminService: AdminService,
    public activeModal: NgbActiveModal) {}

  addAdmin(newAdmin){
    this._adminService.addAdmin(newAdmin.username, newAdmin.email, newAdmin.password)
    .subscribe(res => {
      this.activeModal.close();
      this.currentAdmin.username = '';
      this.currentAdmin.email = '';
      this.currentAdmin.password = '';
    });
  }

}



