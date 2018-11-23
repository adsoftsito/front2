import { Component, Output, EventEmitter, Input} from '@angular/core';
import { TourService } from '../../../services/tour.service';
import {BusService } from '../../../services/bus.service'
import { PlaceService } from '../../../services/place.service'
import { DateinformationService } from '../../../services/dateinformation.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare const $: any;

@Component({
    templateUrl: './TourAddModal.component.html',
})

export class NgbdModalAddTour{ 

    myForm: FormGroup;
    public currentTour: any[] = [undefined];
    public allBuses: any[];
    public allTimes: any[];
    public allPlaces: any[];

    
    constructor(
        private _TourService: TourService,
        private _BusService: BusService,
        private _PlaceService: PlaceService,
        private _DateInfoService: DateinformationService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {}

        ngOnInit(){
            this.getPlaces();
            this.getBuses();
            this.getDateInfos();
           // this.createForm();
        }
        
        showNotification(data, from, align){
            $.notify({
                message: "Tour agregado."
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
        
        addTour(newTour){
            console.log(newTour);

            this._TourService.addTour(newTour[0], newTour[1], newTour[2], newTour[3], newTour[4], newTour[5], newTour[6])
            .subscribe(res => {
                this.showNotification(res, 'top', 'right');
            });
            
        }

        getPlaces(){
            this._PlaceService.getPlaces().subscribe(res =>{this.allPlaces = res});
        }

        getBuses(){
            this._BusService.getBuses().subscribe(res =>{this.allBuses = res});
        }

        getDateInfos(){
            this._DateInfoService.getInformation().subscribe(res =>{this.allTimes = res});
        }

/*
        private createForm() {
            this.myForm = this.formBuilder.group({
                priceAmount: [null, Validators.compose([
                    Validators.min(1),
                    Validators.max(10000),
                    Validators.required 
                ])], 
                tour_id: [null, Validators.compose([
                    Validators.required,
                ])],
                ticket_type_id: [null, Validators.compose([
                    Validators.required,
                ])],
               
            });
        }
        */
}