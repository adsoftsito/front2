import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../../services/tour.service';
import { BusService } from '../../services/bus.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TourInfoComponent } from './showModals/tourInfo.component';
import { BusInfoComponent } from './showModals/busInfo.component';
import { TimeInfoComponent } from './showModals/timeInfo.component';
import { PlaceInfoComponent } from './showModals/placeInfo.component';
import {NgbdModalAddTour} from './modals/TourAddModal.component';
import {NgbdModalEditTour} from './modals/TourEditModal.component';


@Component({
  selector: 'app-about',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  arrayOfTours = [];
  arrayOfBuses = [];

  constructor(
    private _TourService: TourService,
    private _busService: BusService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.getTours();
    this.getBuses();
  }

  getTours(){
    this._TourService.getTours()
    .subscribe(res=>{
      this.arrayOfTours = res;
    });
  }

  getBuses() {
    this._busService.getBuses()
    .subscribe(res => {
      this.arrayOfBuses = res;
    });
  }

  deleteTour(id){
    this._TourService.deleteTour(id)
    .subscribe(res => {
      this.getTours();
    });
  }

  displayTourInfo(id){
    let modalRef = this._modalService.open(TourInfoComponent);
    modalRef.componentInstance.tourId = id;
  }
  displayBusInfo(actualTour){
    let modalRef = this._modalService.open(BusInfoComponent);
    modalRef.componentInstance.buses = this.arrayOfBuses;
    modalRef.componentInstance.actualTour = actualTour;

    modalRef.result.then( res => {
      this.ngOnInit();
    })
  }

  displayTimeInfo(actualTour){
    let modalRef = this._modalService.open(TimeInfoComponent);
    modalRef.componentInstance.actualTour = actualTour;
  }
  

  displayPlaceInfo(actualTour){
    let modalRef = this._modalService.open(PlaceInfoComponent);
    modalRef.componentInstance.actualTour = actualTour;
  }

  openFormModalEdit(id) {
    const modalRef = this._modalService.open(NgbdModalEditTour);
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      this.getTours();
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModalAdd() {
    const modalRef = this._modalService.open(NgbdModalAddTour);
    
    modalRef.result.then((result) => {
      this.getTours();
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
