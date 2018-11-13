import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BusService } from '../../../services/bus.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../custom-validators'

declare const $: any;

@Component({
    templateUrl: './BusAddModal.component.html',
})

export class NgbdModalAddBus{ 
    
    myForm: FormGroup;
    public currentBus: any[] = [undefined, undefined];
    
    constructor(
        private service: BusService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {
            this.createForm();
        }
        
        showNotification(data, from, align){
            $.notify({
                message: "Autobús agregado"
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
                    window.location.reload();
                }
            });
        }
        
        closeModal() {
            this.activeModal.close('Modal Closed');
        }
        
        addBus(newBus){
            this.service.addBus(newBus[0], newBus[1])
            .subscribe(res => {
                this.showNotification(res, 'top', 'right');
                console.log(newBus[0]);
            });
            
        }

        private createForm() {
            this.myForm = this.formBuilder.group({
                numBus: ['',  Validators.compose([
                    Validators.required,
                    Validators.minLength(3)
                ])],  
                availability:['', Validators.required]
            });
        }
         
    }
    
    