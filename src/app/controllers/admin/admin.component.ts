import { Component, OnInit, OnDestroy} from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddAdmin } from './modals/AdminAddModal.component';
import { NgbdModalEditAdmin} from './modals/AdminEditModal.component';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnDestroy {
  
  public arrayOfAdmins = [];
  navigationSubscription;
  currentAdminId: any;
  
  constructor(
    private _adminService: AdminService, 
    private _modalService: NgbModal,
    private router: Router) {
      this.currentAdminId = localStorage.getItem('ID');
      this.navigationSubscription = this.router.events
      .subscribe(e => {
        if (e instanceof NavigationEnd) {
          this.getAdmins();
        }
      });
    }

    ngOnDestroy() {
      if (this.navigationSubscription)
        this.navigationSubscription.unsubscribe();
    }

    openFormModal() {
      const modalRef = this._modalService.open(NgbdModalAddAdmin)
      .result.then((result) => {
        this.getAdmins();
      }).catch((error) => {
        console.log(error);
      });
    }

    openFormModalEdit(id) {
      const modalRef = this._modalService.open(NgbdModalEditAdmin);
      modalRef.componentInstance.id = id;

      modalRef.result.then((result) => {
        this.getAdmins();
      }).catch((error) => {
        console.log(error);
      });
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
        this.getAdmins();
      });
    }
    
  }