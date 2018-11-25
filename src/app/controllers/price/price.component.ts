

import { Component, OnInit} from '@angular/core';
import { PriceService } from '../../services/price.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddPrice } from './modals/PriceAddModal.component';
import { NgbdModalEditPrice} from './modals/PriceEditModal.component';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  
  public arrayOfPrices = [];
  
  constructor(
    private _priceService: PriceService, 
    private _modalService: NgbModal) { }
    
    openFormModal() {
      const modalRef = this._modalService.open(NgbdModalAddPrice);
      
      modalRef.result.then((result) => {
        this,this.getPrices();
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }

    openFormModalEdit(id) {
      const modalRef = this._modalService.open(NgbdModalEditPrice);
      modalRef.componentInstance.id = id;

      modalRef.result.then((result) => {
        this.getPrices();
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
  
    
    ngOnInit() {
      this.getPrices();
    }
    
    ngOnChanges(){
      this.getPrices();
    }
    
    getPrices() {
      this._priceService.getPrices()
      .subscribe(res => {
        this.arrayOfPrices = res;
        console.log(this.arrayOfPrices);
      });
     
    }
    
    deletePrice(id){
      this._priceService.deletePrice(id)
      .subscribe(res => {
        this.getPrices();
      });
    }
    
  }
  
  
  
  
  