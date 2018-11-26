import { Component, Output, EventEmitter, Input} from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../custom-validators'

declare const $: any;
@Component({
    templateUrl: './CompanyEditModal.component.html',
})

export class NgbdModalEditCompany{ 
    
    myForm: FormGroup;
    @Input() id: number;
    
    public currentCompany: any[] = [undefined];
    
    
    constructor(
        private _CompanyService: CompanyService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {}

        ngOnInit() {
            this.createForm();
            this.getByIdCompany();
        }
       
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
                    // window.location.reload();
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
                    name: [null, Validators.compose([
                        Validators.minLength(1),
                        Validators.maxLength(30),
                        CustomValidators.patternValidator(/[A-Z]||[a-z]/, { hasCase: true }),
                        Validators.required 
                    ])], 
                    full_name: [null, Validators.compose([
                        Validators.required,
                        CustomValidators.patternValidator(/[A-Z]||[a-z]/, { hasCase: true }),
                        Validators.minLength(3),
                        Validators.maxLength(30),
                    ])],
                    phone_number: [null, Validators.compose([
                        Validators.minLength(5),
                        Validators.maxLength(15),
                        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
                    ])],
                    ieps: [null, Validators.compose([
                        Validators.required,
                        CustomValidators.patternValidator(/\d/, { hasNumber: true })
                    ])],
                    iva: [null, Validators.compose([
                        Validators.required,
                        CustomValidators.patternValidator(/\d/, { hasNumber: true })
                    ])],
                    rfc: [null, Validators.compose([
                        CustomValidators.patternValidator(/[A-Z]||[a-z]/, { hasCase: true }),
                        Validators.minLength(10),
                        Validators.maxLength(20),
                    ])],
                    address: [null, Validators.compose([
                        CustomValidators.patternValidator(/[A-Z]||[a-z]/, { hasCase: true }),
                        Validators.minLength(5),
                        Validators.maxLength(50),
                    ])],
                    postal_code: [null, Validators.compose([
                        Validators.minLength(5),
                        Validators.maxLength(5),
                        CustomValidators.patternValidator(/\d/, { hasNumber: true })
                    ])],
                });
            }
                
                
                
            }
            