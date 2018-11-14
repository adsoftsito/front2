import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-aboutplace',
    templateUrl: './placeInfo.component.html'
  })
  
  export class PlaceInfoComponent implements OnInit{
  

    @Input() arrayOfPlaces: any;
  
    constructor(
      private _placeService: PlaceService,
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
  