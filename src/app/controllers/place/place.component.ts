import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddPlace } from './modals/PlaceAddModal.component';
import { NgbdModalEditPlace} from './modals/PlaceEditModal.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  public places = [];
  constructor(private service: PlaceService, private _modalService: NgbModal) { }
  
  openFormModal() {
    const modalRef = this._modalService.open(NgbdModalAddPlace);
    
    modalRef.result.then((result) => {
      this,this.getPlaces();
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModalEdit(id) {
    const modalRef = this._modalService.open(NgbdModalEditPlace);
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      this.getPlaces();
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.service.getPlaces()
    .subscribe(data => this.places = data);
  }


  ngOnChanges(){
    this.service.getPlaces()
    .subscribe(data => this.places = data);
    // this.selectedUsuario = "";
  }

  deletePlace(id) {
    if(confirm("Desea eliminar el lugar?")){
      this.service.deletePlace(id).subscribe(data => {
        this.ngOnChanges(); 
      });
    }
  }

  getPlaces() {
    this.service.getPlaces()
    .subscribe(res => {
      this.places = res;
      console.log(this.places);
    });
   
  }

}
