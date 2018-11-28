import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddPlaceComponent } from './modals/PlaceAddModal.component';
import { NgbdModalEditPlace} from './modals/PlaceEditModal.component';
import { GetMapModalComponent } from './modals/GetMapModalComponent.component';

declare const $: any;

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  places = [];
  modalRef;

  constructor(
    private service: PlaceService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.service.getPlaces()
    .subscribe(data => this.places = data);
  }

  getPlaces() {
    this.service.getPlaces()
    .subscribe(res => {
      this.places = res;
    });
  }

  openMapModal(info, toursFromPlace) {
    this.modalRef = this._modalService.open(GetMapModalComponent, {size: 'lg'});
    this.modalRef.componentInstance.placeInfo = info;
    this.modalRef.componentInstance.toursFromPlace = toursFromPlace;
  }

  openAddModal() {
    this.modalRef = this._modalService.open(NgbdModalAddPlaceComponent, {size: 'lg'});
    
    this.modalRef.result.then((result) => {
      this.getPlaces();
    }).catch((error) => {
      this.getPlaces();
    });
  }

  openEditModal(id) {
    this.modalRef = this._modalService.open(NgbdModalEditPlace, {size: 'lg'});
    this.modalRef.componentInstance.id = id;

    this.modalRef.result.then((result) => {
      this.getPlaces();
    }).catch((error) => {
      this.getPlaces();
    });
  }

  deletePlace(id) {
    if(confirm('Desea eliminar el lugar?')) {
      this.service.deletePlace(id).subscribe(data => {
        this.showNotification({
          info: 'Eliminado correctamente',
          color: 'success'
        }, 'top', 'right');
        this.getPlaces();
      }, err => {
        this.showNotification({
          info: 'Ha habido un error',
          color: 'danger'
        }, 'top', 'right');
      });
      this.getPlaces();
    }
  }

  showNotification(data, from, align) {
    $.notify({
        message: data.info
    },{
        type: data.color,
        timer: 1000,
        placement: {
            from: from,
            align: align
        },
        template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
        <button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>
        <span data-notify="icon"></span>
        <span data-notify="message">{2}</span>
        <div class="progress" data-notify="progressbar">
        <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
        </div>
        </div>`
    });
}

}
