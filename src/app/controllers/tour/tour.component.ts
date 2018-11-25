import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../../services/tour.service';
import { BusService } from '../../services/bus.service';
import { DateinformationService } from '../../services/dateinformation.service';
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
  arrayOfDateInfos = [];
  modalRef: any;

  constructor(
    private _tourService: TourService,
    private _busService: BusService,
    private _dateInfoService: DateinformationService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.getTours();
    this.getBuses();
    this.getDateInfos();
  }

  getTours(){
    this._tourService.getTours()
    .subscribe(res=>{
      this.arrayOfTours = res;
    });
  }

  getBuses() {
    this._busService.getBuses()
    .subscribe(res => {
      this.arrayOfBuses = res;
      console.log('Buses just arrived');
    });
  }

  getDateInfos() {
    this._dateInfoService.getInformation()
    .subscribe(res => {
      this.arrayOfDateInfos = res;
      console.log('DateInfos just arrived');
    }, err => {
      console.log('Error getting DateInfos');
    });
  }

  deleteTour(id){
    this._tourService.deleteTour(id)
    .subscribe(res => {
      this.getTours();
    });
  }

  displayTourInfo(id){
    this.modalRef = null;
    this.modalRef = this._modalService.open(TourInfoComponent);
    this.modalRef.componentInstance.tourId = id;
  }

  displayBusInfo(actualTour){
    this.modalRef = null;
    this.modalRef = this._modalService.open(BusInfoComponent);
    this.modalRef.componentInstance.buses = this.arrayOfBuses;
    this.modalRef.componentInstance.actualTour = actualTour;

    this.modalRef.result.then( res => {
      this.getBuses();
    }, err => {
      this.getBuses();
    });
  }

  displayTimeInfo(actualTour){
    this.modalRef = null;
    this.modalRef = this._modalService.open(TimeInfoComponent);
    this.modalRef.componentInstance.actualTour = actualTour;
    this.modalRef.componentInstance.dateInfo = this.arrayOfDateInfos;

    this.modalRef.result.then( res => {
      this.getDateInfos();
    }, err => {
      this.getDateInfos();
    });
  }
  

  displayPlaceInfo(actualTour){
    this.modalRef = this._modalService.open(PlaceInfoComponent);
    this.modalRef.componentInstance.actualTour = actualTour;
  }

  openFormModalEdit(id) {
    this.modalRef = this._modalService.open(NgbdModalEditTour);
    this.modalRef.componentInstance.id = id;

    this.modalRef.result.then((result) => {
      this.getTours();
      console.log(result);
    }).catch((error) => {
      console.log('Error on edit' + error);
    });
  }

  openFormModalAdd() {
    this.modalRef = this._modalService.open(NgbdModalAddTour);
    
    this.modalRef.result.then((result) => {
      this.getTours();
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
