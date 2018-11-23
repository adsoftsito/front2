import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-aboutplace',
    templateUrl: './placeInfo.component.html'
  })
  
  export class PlaceInfoComponent implements OnInit{
  

    @Input() arrayOfPlaces: any;
    arrayOfAllPlaces=[];

  
    constructor(
      private _placeService: PlaceService,
      private activeModal: NgbActiveModal){ }
  
    ngOnInit(){
      this.getPlaces();
    }
    getPlaces(){
      this._placeService.getPlaces().subscribe(res => { this.arrayOfAllPlaces = res;});
    }

  }
  