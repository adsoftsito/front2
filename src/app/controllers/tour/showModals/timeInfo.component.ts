import { Component, OnInit, Input, Pipe } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { DateinformationService } from '../../../services/dateinformation.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
declare const $: any;

@Component({
    selector: 'app-abouttime',
    templateUrl: './timeInfo.component.html'
})

export class TimeInfoComponent implements OnInit{
    
    form: FormGroup;
    @Input() actualTour;
    arrayOfAllDateInfo=[];
    arrayOfDateInfo=[];
    controls;
    
    constructor(
        private formBuilder: FormBuilder,  
        private _tourService: TourService,
        private activeModal: NgbActiveModal,
        private _dateinfoService:  DateinformationService){ }
        
        ngOnInit(){
            //to create arrayOdDateInfo
            this.getGeneralDateInfo(this.actualTour.dateinformations);
            //to create arrayOfAllDateInfo
            this.getDateInfos();
        }
        
        showNotification(from, align){
            $.notify({
                message: "Tour editado."
            },{
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
        
        
        getDateInfos(){
            this._dateinfoService.getInformation().subscribe(res => { this.arrayOfAllDateInfo = res; this.createForm();});
        }
        
        getGeneralDateInfo(dateinformations){
            for(let dateinf of dateinformations){
                this._dateinfoService.getDateInfoById(dateinf.id)
                .subscribe(res => {
                    this.arrayOfDateInfo.push(res);
                });
            }
            
            
        }
        
        updateTour() {
            for(let i = 0; i < this.arrayOfAllDateInfo.length; i++){
                if(this.controls[i].value == true){
                    //add bus
                    this._tourService.addTime(this.arrayOfAllDateInfo[i].id, this.actualTour.id).subscribe();
                }else{
                    //remove bus
                    this._tourService.removeTime(this.arrayOfAllDateInfo[i].id, this.actualTour.id).subscribe();
                }
            }
            this.showNotification('top', 'right');
            
        }
        
        
        createForm() {
            console.log(this.arrayOfAllDateInfo);
            console.log(this.arrayOfDateInfo);

            this.controls = this.arrayOfAllDateInfo.map(c => new FormControl(false));
            //esto se podria hacer mil veces mas eficiente (primera idea... un sort)... 
            for(let mydate of this.arrayOfDateInfo){
                for(let i = 0 ; i < this.arrayOfAllDateInfo.length ; i++){
                    if(mydate.id == this.arrayOfAllDateInfo[i].id){
                        this.controls[i].setValue(true);
                        break;
                    }
                }
            }
            this.form = this.formBuilder.group({
                arrayOfAllDateInfo: new FormArray(this.controls)
            });
        }
        
        
    }