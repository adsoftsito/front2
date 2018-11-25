import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../../services/tour.service';
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
  displayBusInfo(arrayOfBuses, idOfTour){
    let modalRef = this._modalService.open(BusInfoComponent);
    modalRef.componentInstance.arrayOfBuses = arrayOfBuses;
    modalRef.componentInstance.idOfTour = idOfTour;

  }

  displayTimeInfo(actualTour){
    let modalRef = this._modalService.open(TimeInfoComponent);
    modalRef.componentInstance.actualTour = actualTour;
  }
  

  displayPlaceInfo(arrayOfPlaces, idOfTour){
    let modalRef = this._modalService.open(PlaceInfoComponent);
    modalRef.componentInstance.arrayOfPlaces = arrayOfPlaces;
    modalRef.componentInstance.idOfTour = idOfTour;
  }

  openFormModalEdit(id) {
    const modalRef = this._modalService.open(NgbdModalEditTour);
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModalAdd() {
    const modalRef = this._modalService.open(NgbdModalAddTour);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
