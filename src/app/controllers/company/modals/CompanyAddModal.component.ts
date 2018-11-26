import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../custom-validators'

declare const $: any;

@Component({
    templateUrl: './CompanyAddModal.component.html',
})

export class NgbdModalAddCompany{ 
    
    myForm: FormGroup;
    public currentCompany: any[] = [undefined];
    
    constructor(
        private _CompanyService: CompanyService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {}

        ngOnInit(){
            this.createForm();
        }
        
        showNotification(data, from, align){
            $.notify({
                message: "Compañia agregada."
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
        
        addCompany(newCompany){
            console.log(newCompany);
            this._CompanyService.addCompany(newCompany[0], newCompany[1], newCompany[2], newCompany[3], newCompany[4], newCompany[5], newCompany[6], newCompany[7])
            .subscribe(res => {
                console.log(res);
                this.showNotification(res, 'top', 'right');
            });
            
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
                    Validators.maxLength(15),
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
    
    