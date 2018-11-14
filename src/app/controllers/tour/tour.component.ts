import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../../services/tour.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TourInfoComponent } from './showModals/tourInfo.component';
import { BusInfoComponent } from './showModals/busInfo.component';
import { TimeInfoComponent } from './showModals/timeInfo.component';


@Component({
  selector: 'app-about',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  arrayOfTours=[];

  constructor(
    private _TourService: TourService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(){
    this._TourService.getTours()
    .subscribe(res=>{
      this.arrayOfTours = res;
    });
  }

  displayTourInfo(id){
    let modalRef = this._modalService.open(TourInfoComponent);
    modalRef.componentInstance.tourId = id;
  }
  displayBusInfo(arrayOfBuses){
    let modalRef = this._modalService.open(BusInfoComponent);
    modalRef.componentInstance.arrayOfBuses = arrayOfBuses;
  }

  displayTimeInfo(idDateInfos){
    let modalRef = this._modalService.open(TimeInfoComponent);
    modalRef.componentInstance.idDateInfos = idDateInfos;
  }

}
