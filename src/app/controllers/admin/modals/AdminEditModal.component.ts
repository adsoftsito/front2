import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare const $: any;
@Component({
    templateUrl: './AdminEditModal.component.html',
})

export class NgbdModalEditAdmin{ 
    
    myForm: FormGroup;
    @Input() id: number;
    
    public currentAdmin: any[] = [undefined, undefined, undefined];
    
    
    constructor(
        private _adminService: AdminService,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder) {this.createForm();}
       
        showNotification(data, from, align){
            $.notify({
                message: "Usuario editado."
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
        
        updateAdmin() {
            this._adminService.updateAdmin(this.currentAdmin[0],
                this.currentAdmin[1], 
                this.currentAdmin[2], this.id).subscribe(res => {
                    this.showNotification(res, 'top', 'right');
                });
                //this.closeModal();
            }
            
            ngOnInit() {
                this.getByIdAdmin();
            }
            
            getByIdAdmin(){
                this._adminService.getByIDAdmin(this.id)
                .subscribe(data => {this.currentAdmin[0] = data.username, this.currentAdmin[1] = data.email});
            }
            
            private createForm() {
                this.myForm = this.formBuilder.group({
                    username: ['', Validators.compose([
                        Validators.required,
                        Validators.maxLength(30),
                        Validators.minLength(3)])], 
                        email: ['', Validators.compose([
                            Validators.required,
                            Validators.email
                        ])],
                    });
                }
                
                
                
            }
            