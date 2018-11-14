import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-abouttour',
    templateUrl: './tourInfo.component.html'
  })
  
  export class TourInfoComponent implements OnInit{
  
    public tour: any;

    @Input() tourId: number;
  
    constructor(
      private _TourService: TourService,
      private activeModal: NgbActiveModal){ }
  
    ngOnInit(){
      this.getByIdTour();
    }

    getByIdTour(){
        this._TourService.getByIdTour(this.tourId)
        .subscribe(res => {
          this.tour = res;
        });
    }
  }
  