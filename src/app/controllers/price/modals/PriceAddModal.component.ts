import { Component, Output, EventEmitter, Input} from '@angular/core';
import { PriceService } from '../../../services/price.service';
import { TourService } from '../../../services/tour.service';
import { TicketTypeService } from '../../../services/tickettype.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare const $: any;

@Component({
    templateUrl: './PriceAddModal.component.html',
})

export class NgbdModalAddPrice{ 

    myForm: FormGroup;
    public currentPrice: any[] = [undefined];
    public allTours: any[];
    public allTypeOfTickets: any[];
    
    constructor(
        private _PriceService: PriceService,
        private _TourService: TourService,
        private _TicketTypeService: TicketTypeService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {}

        ngOnInit(){
            this.getTours();
            this.getTicketTypes();
            this.createForm();
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
        
        addPrice(newPrice){
            console.log(newPrice);

            this._PriceService.addPrice(newPrice[0], newPrice[1], newPrice[2])
            .subscribe(res => {
                this.showNotification(res, 'top', 'right');
            });
            
        }

        getTours(){
            this._TourService.getTours().subscribe(res =>{this.allTours = res});
        }

        getTicketTypes(){
            this._TicketTypeService.getTicketTypes().subscribe(res =>{this.allTypeOfTickets = res});
        }

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
}