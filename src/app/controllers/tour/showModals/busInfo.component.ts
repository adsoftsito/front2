import { Component, OnInit, Input } from '@angular/core';
import { BusService } from '../../../services/bus.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-aboutbus',
    templateUrl: './busInfo.component.html'
  })
  
  export class BusInfoComponent implements OnInit{
  

    @Input() arrayOfBuses: any;
  
    constructor(
      private _busService: BusService,
      private activeModal: NgbActiveModal){ }
  
    ngOnInit(){
      //this.getByIdTimes();
    }
/*
    getByIdTimes(){
        this._dateService.getDates(this.tourId)
        .subscribe(res => {
          this.tour = res;
        });
    }*/
  }
  