import { Component, OnInit, Input } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../../modals/about/about.component';

@Component({
  selector: 'app-about',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class TourComponent implements OnInit {

  arrayOfPurchases=[];

  constructor(
    private _purchaseService: PurchaseService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.getPurchases();
  }

  getPurchases(){
    this._purchaseService.getPurchases()
    .subscribe(res=>{
      this.arrayOfPurchases = res;
    });
  }

  displayTicketsInfo(id){
    let modalRef = this._modalService.open(PurchaseInfoComponent);
    modalRef.componentInstance.purchaseId = id;
  }

}
