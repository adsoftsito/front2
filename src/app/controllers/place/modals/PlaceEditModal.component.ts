import { Component, OnInit, Input} from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
declare const $: any;

@Component({
    templateUrl: './PlaceEditModal.component.html',
})
export class NgbdModalEditPlace implements OnInit {

    @Input() id: number;

    public currentPlace = {
        id: null,
        name: '',
        nameIsNotValid: false,
        description: '',
        descriptionIsEmpty: false,
        place_type: null,
        noPlaceTypeSelected: true,
        narrative_url: '',
        image_url: ''
    };

    allTypeOfPlaces: any[];

    lat: number;
    lng: number;

    constructor(
        private _PlaceService: PlaceService,
        public activeModal: NgbActiveModal) { }

    ngOnInit() {
        this.getPlaceType();
        this._PlaceService.getIDPlace(this.id)
        .subscribe(res => {
            this.currentPlace.id = res.id;
            this.currentPlace.name = res.name;
            this.currentPlace.description = res.description;
            this.currentPlace.place_type = res.place_type_id.id;
            this.currentPlace.narrative_url = res.narrative_url;
            this.currentPlace.image_url = res.image_url;
            this.lat = res.latitude;
            this.lng = res.longitude;
            console.log(res);
        });
    }

    updatePlace(currentPlace) {
        if (this.fieldsAreGoodToGo()) {
            this._PlaceService.updatePlace(
                this.currentPlace.name,
                this.currentPlace.description,
                this.lat,
                this.lng,
                this.currentPlace.narrative_url,
                this.currentPlace.place_type,
                this.currentPlace.image_url,
                this.currentPlace.id
            ).subscribe(res => {
                this.showNotification({
                    info: 'Lugar actualizado',
                    color: 'success'
                }, 'top', 'right');
            }, err => {
                this.showNotification({
                    info: 'Ha habido un error',
                    color: 'danger'
                }, 'top', 'right');
            });
        }
    }

    getPlaceType() {
        this._PlaceService.getPlaceType()
        .subscribe(res => {this.allTypeOfPlaces = res; });
    }

    changeMarkerOnMap($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
    }

    fieldsAreGoodToGo() {
        if (this.currentPlace.name.length > 5) {
            this.currentPlace.nameIsNotValid = false;
        } else { this.currentPlace.nameIsNotValid = true; return false; }
        if (this.currentPlace.description.length > 10) {
            this.currentPlace.descriptionIsEmpty = false;
        } else { this.currentPlace.descriptionIsEmpty = true; return false; }
        if (this.currentPlace.place_type != null) {
            this.currentPlace.noPlaceTypeSelected = false;
        } else { this.currentPlace.place_type = true; return false; }
        return true;
    }

    showNotification(data, from, align){
        $.notify({
            message: data.info
        }, {
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
            </div>`,
            onShow: () => {
                this.activeModal.close('Modal Closed');
            }
        });
    }
}
