import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
    templateUrl: './AdminEditModal.component.html',
})
 
export class NgbdModalEditAdmin{ 
    
    myForm: FormGroup;
    @Input() id: number;

    public currentAdmin;

    constructor(
        private _adminService: AdminService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {this.createForm();}
        
        closeModal() {
            window.location.reload();
            this.activeModal.close('Modal Closed');
        }

        updateAdmin(name,email,password) {
            this._adminService.updateAdmin(name, email, password, this.id).subscribe();
            this.closeModal();
        }

        ngOnInit() {
            this.getByIdAdmin();
        }

        getByIdAdmin(){
            this._adminService.getByIDAdmin(this.id)
            .subscribe(data => this.currentAdmin = data);
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
        