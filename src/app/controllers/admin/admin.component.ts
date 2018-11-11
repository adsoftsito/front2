import { Component, OnInit} from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddAdmin } from './modals/AdminAddModal.component';
import { NgbdModalEditAdmin} from './modals/AdminEditModal.component';

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
    
    openFormModal() {
      const modalRef = this._modalService.open(NgbdModalAddAdmin);
      
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }

    openFormModalEdit(id) {
      const modalRef = this._modalService.open(NgbdModalEditAdmin);
      modalRef.componentInstance.id = id;

      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
  
    
    ngOnInit() {
      this.getAdmins();
    }
    
    ngOnChanges(){
      this.getAdmins();
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
  
  
  
  
  