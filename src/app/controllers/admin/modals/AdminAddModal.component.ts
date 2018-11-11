import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './AdminAddModal.component.html',
})

export class NgbdModalAddAdmin{ 
    
    myForm: FormGroup;

    constructor(
        private _adminService: AdminService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {this.createForm();}
        
        closeModal() {
            window.location.reload();
            this.activeModal.close('Modal Closed');
        }
        
        addAdmin(username, email, password){
            this._adminService.addAdmin(username, email, password).subscribe();
            this.closeModal();
        }    
        
        private createForm() {
            this.myForm = this.formBuilder.group({
                username: ['', Validators.compose([
                    Validators.maxLength(25),
                    Validators.minLength(3),
                    Validators.required ])], 
                    email: ['', Validators.compose([
                        Validators.required,
                    ])],
                    password: ['', Validators.compose([
                        Validators.minLength(6),
                        Validators.required,
                    ])],
                });
            }
        
            
            
        }
        