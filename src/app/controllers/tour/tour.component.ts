import { Component, OnInit, OnChanges } from '@angular/core';
import { TourService } from '../../services/tour.service';
import { BusService } from '../../services/bus.service';
import { DateinformationService } from '../../services/dateinformation.service';
import { PlaceService } from '../../services/place.service';
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
  arrayOfPlaces = [];
  modalRef: any;

  constructor(
    private _tourService: TourService,
    private _busService: BusService,
    private _placeSerice: PlaceService,
    private _dateInfoService: DateinformationService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.fetchAll();
  }
  
  fetchAll() {
    this.getTours();
    this.getBuses();
    this.getDateInfos();
    this.getPlaces();
  }

  getPlaces() {
    this._placeSerice.getPlaces()
    .subscribe( res => {
      this.arrayOfPlaces = res;
      console.log('PLACES');
      console.log(this.arrayOfPlaces);
    });
  }

  getTours() {
    this._tourService.getTours()
    .subscribe(res => {
      this.arrayOfTours = res;
      console.log('TOURS');
      console.log(this.arrayOfTours);
    });
  }

  getBuses() {
    this._busService.getBuses()
    .subscribe(res => {
      this.arrayOfBuses = res;
      console.log('BUSES');
      console.log(this.arrayOfBuses);
    });
  }

  getDateInfos() {
    this._dateInfoService.getInformation()
    .subscribe(res => {
      this.arrayOfDateInfos = res;
      console.log('DATES');
      console.log(this.arrayOfDateInfos);
    }, err => {
      // console.log('Error getting DateInfos');
    });
  }

  deleteTour(id){
    this._tourService.deleteTour(id)
    .subscribe(res => {
      this.getTours();
    });
  }

  displayTourInfo(id){
    this.modalRef = this._modalService.open(TourInfoComponent);
    this.modalRef.componentInstance.tourId = id;
  }

  displayBusInfo(actualTour){
    this.modalRef = this._modalService.open(BusInfoComponent);
    this.modalRef.componentInstance.buses = this.arrayOfBuses;
    this.modalRef.componentInstance.actualTour = actualTour;

    this.modalRef.result.then( res => {
      this.getTours();
    }, err => {
      
    });
  }

  displayTimeInfo(actualTour){
    this.modalRef = this._modalService.open(TimeInfoComponent);
    this.modalRef.componentInstance.actualTour = actualTour;
    this.modalRef.componentInstance.dateInfo = this.arrayOfDateInfos;

    this.modalRef.result.then( res => {
      this.getTours();
    }, err => {

    });
  }
  

  displayPlaceInfo(actualTour){
    this.modalRef = this._modalService.open(PlaceInfoComponent);
    this.modalRef.componentInstance.actualTour = actualTour;
    this.modalRef.componentInstance.places = this.arrayOfPlaces;

    this.modalRef.result.then(res => {
      this.getTours();
    }, error => {

    });
  }

  openFormModalEdit(id) {
    this.modalRef = this._modalService.open(NgbdModalEditTour);
    this.modalRef.componentInstance.id = id;

    this.modalRef.result.then((result) => {
      this.fetchAll();
    }).catch((error) => {
      console.log('Error on edit' + error);
    });
  }

  openFormModalAdd() {
    this.modalRef = this._modalService.open(NgbdModalAddTour);
    
    this.modalRef.result.then((result) => {
      this.fetchAll();
    }).catch((error) => {
      console.log(error);
    });
  }

}
