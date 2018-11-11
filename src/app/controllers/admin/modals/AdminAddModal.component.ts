import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../custom-validators'

@Component({
    templateUrl: './AdminAddmodal.component.html',
})

export class NgbdModalAddAdmin{ 
    
    myForm: FormGroup;

    constructor(
        private _adminService: AdminService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {this.createForm();}
        
        closeModal() {
            //window.location.reload();
            this.activeModal.close('Modal Closed');
        }
        
        addAdmin(username, email, password){
            this._adminService.addAdmin(username, email, password).subscribe();
            this.closeModal();
        }    
        
        private createForm() {
            this.myForm = this.formBuilder.group({
                username: [null, Validators.compose([
                    Validators.maxLength(30),
                    Validators.minLength(3),
                    Validators.required ])], 
                    email: [null, Validators.compose([
                        Validators.required,
                        Validators.email
                    ])],
                    password: [null, Validators.compose([
                        Validators.minLength(6),
                        Validators.required,
                        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
                        CustomValidators.patternValidator(/[A-Z]||[a-z]/, { hasCase: true }),
                    ])],
                    confirmPassword: [null, Validators.compose([Validators.required])]
                },
                {
                    validator: CustomValidators.passwordMatchValidator
                });
            }

        
            
            
        }

        