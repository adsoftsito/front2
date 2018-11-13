import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  arrayOfPurchases=[];

  constructor(private _purchaseService: PurchaseService) { }

  ngOnInit() {
    this.getPurchases();
  }

  getPurchases(){
    this._purchaseService.getPurchases()
    .subscribe(res=>{
      this.arrayOfPurchases = res;
    });
  }

}
