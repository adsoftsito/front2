import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../custom-validators'

declare const $: any;

@Component({
    templateUrl: './AdminAddmodal.component.html',
})

export class NgbdModalAddAdmin{ 
    
    myForm: FormGroup;
    public currentAdmin: any[] = [undefined];

    constructor(
        private _adminService: AdminService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {}

        ngOnInit(){
            this.createForm();
        }

        showNotification(data, from, align){
            $.notify({
                message:data.info
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
                }
            });
        }
        
        closeModal() {
            this.activeModal.close(true);
        }
        
        addAdmin(newAdmin){
            this._adminService.addAdmin(newAdmin[0], newAdmin[1], newAdmin[2])
            .subscribe(res => {
                this.showNotification(res, 'top', 'right');
                // window.location.reload();
            }, err=>{
                this.showNotification(err.error, 'top', 'right');
            });
            
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

        