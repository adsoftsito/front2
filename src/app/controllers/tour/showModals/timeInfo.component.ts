import { Component, OnInit, Input } from '@angular/core';
import { DateinformationService } from '../../../services/dateinformation.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-abouttime',
    templateUrl: './timeInfo.component.html'
  })
  
  export class TimeInfoComponent implements OnInit{
  

    @Input() arrayTimes: any;
  
    constructor(
      private _dateService: DateinformationService,
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
  