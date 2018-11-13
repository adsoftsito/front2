import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BusService } from '../../../services/bus.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare const $: any;
@Component({
    templateUrl: './BusEditModal.component.html',
})

export class NgbdModalEditBus{ 
    
    myForm: FormGroup;
    @Input() id: number;
    
    public currentBus: any[] = [undefined, undefined];
    
    
    constructor(
        private _busService: BusService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {this.createForm();}
       
        showNotification(data, from, align){
            $.notify({
                message: "Autobús editado."
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
           // window.location.reload();
            this.activeModal.close('Modal Closed');
        }
        
        updateBus() {
            this._busService.updateBus(this.currentBus[0],
                this.currentBus[1], this.id).subscribe(res => {
                    this.showNotification(res, 'top', 'right');
                });
                //this.closeModal();
        }
            
            ngOnInit() {
                this.getByIDBus();
            }
            
            getByIDBus(){
                this._busService.getByIDBus(this.id)
                .subscribe(data => {this.currentBus[0] = data.numBus, this.currentBus[1] = data.availability});
            }
            
            private createForm() {
                this.myForm = this.formBuilder.group({
                    numBus: ['', Validators.compose([
                        Validators.required,
                        Validators.minLength(3)
                    ])], 
                    availability:['', Validators.required]
                });
            }
                
                
   }
            