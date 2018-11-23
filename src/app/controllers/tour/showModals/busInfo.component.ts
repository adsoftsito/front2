import { Component, OnInit, Input } from '@angular/core';
import { BusService } from '../../../services/bus.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-aboutbus',
    templateUrl: './busInfo.component.html'
  })
  
  export class BusInfoComponent implements OnInit{
  

    @Input() arrayOfBuses: any;
    arrayOfAllBuses=[];
  
    constructor(
      private _busService: BusService,
      private activeModal: NgbActiveModal){ }
  
    ngOnInit(){
      this.getBuses();
    }

    getBuses(){
      this._busService.getBuses().subscribe(res => { this.arrayOfAllBuses = res;});
    }

  }
  