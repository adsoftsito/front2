import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare const $: any;
@Component({
    templateUrl: './CompanyEditModal.component.html',
})

export class NgbdModalEditCompany{ 
    
    myForm: FormGroup;
    @Input() id: number;
    
    public currentCompany: any[] = [undefined, undefined, undefined];
    
    
    constructor(
        private _CompanyService: CompanyService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {this.createForm();}
       
        showNotification(data, from, align){
            $.notify({
                message: "Compañia editada."
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
        
        updateCompany() {
            this._CompanyService.updateCompany(this.currentCompany[0], this.currentCompany[1], this.currentCompany[2], this.currentCompany[3], this.currentCompany[4], this.currentCompany[5], this.currentCompany[6], this.currentCompany[7], this.id)
            .subscribe(res => {
                    this.showNotification(res, 'top', 'right');
                });
                //this.closeModal();
            }
            
            ngOnInit() {
                this.getByIdCompany();
            }
            
            getByIdCompany(){
                this._CompanyService.getByIdCompany(this.id)
                .subscribe(data => {this.currentCompany[0] = data.name,
                    this.currentCompany[1] = data.full_name,
                    this.currentCompany[2] = data.phone_number,
                    this.currentCompany[3] = data.address,
                    this.currentCompany[4] = data.postal_code,
                    this.currentCompany[5] = data.rfc,
                    this.currentCompany[6] = data.ieps,
                    this.currentCompany[7] = data.iva});
            }
            
            private createForm() {
                this.myForm = this.formBuilder.group({
                    /*username: ['', Validators.compose([
                        Validators.required,
                        Validators.maxLength(30),
                        Validators.minLength(3)])], 
                        email: ['', Validators.compose([
                            Validators.required,
                            Validators.email
                        ])],*/
                    });
                }
                
                
                
            }
            