import { Component, Output, EventEmitter, Input} from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare const $: any;

@Component({
    templateUrl: './PlaceAddModal.component.html',
})
export class NgbdModalAddPlace{
    placeForm: FormGroup;
    public currentPlace: any[] = [undefined];
    public allPlaces: any[];
    public allTypeOfPlaces: any[];
    
    constructor(
        private _PlaceService: PlaceService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {}

        ngOnInit(){
            this.getPlaces();
            this.createForm();
            this.getPlaceType();
        }
        
        showNotification(data, from, align){
            $.notify({
                message: "Precio agregado."
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
                </div>`,
                onShow: ()=>{
                    this.closeModal();
                },
                onClose: ()=>{
                    // window.location.reload();
                }
            });
        }
        
        closeModal() {
            this.activeModal.close('Modal Closed');
        }
        
        addPlace(newPlace){
            console.log(newPlace);
            this._PlaceService.addPlace(newPlace[0], newPlace[1], newPlace[2], newPlace[3], newPlace[4], newPlace[5])
            .subscribe(res => {
                this.showNotification(res, 'top', 'right');
            });
            
        }

        getPlaces(){
            this._PlaceService.getPlaces().subscribe(res =>{this.allPlaces = res});
        }

        getPlaceType() {
            this._PlaceService.getPlaceType().subscribe(res => {this.allTypeOfPlaces = res; console.log(res)});
          }

          private createForm() {
            this.placeForm = this.formBuilder.group({
                name: [null, Validators.compose([
                    Validators.required 
                ])], 
                description: [null, Validators.compose([
                    Validators.required,
                ])],
                latitude: [null, Validators.compose([
                    Validators.required,
                ])],
                longitude: [null, Validators.compose([
                    Validators.required,
                ])],
                narrative_url: [null, Validators.compose([
                    Validators.required,
                ])],
                place_type_id: [null, Validators.compose([
                    Validators.required,
                ])],
               
            });
        }
}