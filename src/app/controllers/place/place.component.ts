import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddPlace } from './modals/PlaceAddModal.component';
import { NgbdModalEditPlace} from './modals/PlaceEditModal.component';
import { GetMapModalComponent } from './modals/GetMapModalComponent.component';

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
    this.modalRef = this._modalService.open(NgbdModalAddPlace, {size: 'lg'});
    
    this.modalRef.result.then((result) => {
      this.getPlaces();
    }).catch((error) => {
      console.log(error);
    });
  }

  openEditModal(id) {
    this.modalRef = this._modalService.open(NgbdModalEditPlace);
    this.modalRef.componentInstance.id = id;

    this.modalRef.result.then((result) => {
      this.getPlaces();
    }).catch((error) => {
      console.log(error);
    });
  }

  deletePlace(id) {
    if(confirm('Desea eliminar el lugar?')){
      this.service.deletePlace(id).subscribe(data => {
        this.getPlaces();
      });
    }
  }

}
