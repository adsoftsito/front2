import { Component, OnInit} from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddCompany } from './modals/CompanyAddModal.component';
import { NgbdModalEditCompany} from './modals/CompanyEditModal.component';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  
  public arrayOfCompanies = [];
  
  constructor(
    private _companyService: CompanyService, 
    private _modalService: NgbModal) { }
    
    openFormModal() {
      const modalRef = this._modalService.open(NgbdModalAddCompany);
      
      modalRef.result.then((result) => {
        this.getCompanies();
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }

    openFormModalEdit(id) {
      const modalRef = this._modalService.open(NgbdModalEditCompany);
      modalRef.componentInstance.id = id;

      modalRef.result.then((result) => {
        this.getCompanies();
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
  
    
    ngOnInit() {
      this.getCompanies();
    }
    
    ngOnChanges(){
      this.getCompanies();
    }
    
    getCompanies() {
      this._companyService.getCompanies()
      .subscribe(res => {
        this.arrayOfCompanies = res;
      });
     
    }
    
    deleteCompany(id){
      this._companyService.deleteCompany(id)
      .subscribe(res => {
        this.getCompanies();
      });
    }
    
  }
  
  
  
  
  