import { Component, OnInit, Input, Pipe } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { DateinformationService } from '../../../services/dateinformation.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-abouttime',
    templateUrl: './timeInfo.component.html'
})

export class TimeInfoComponent implements OnInit{
    
    
    @Input() actualTour;
    arrayOfAllDateInfo=[];
    arrayOfDateInfo=[];
    
    constructor(
        private _tourService: TourService,
        private activeModal: NgbActiveModal,
        private _dateinfoService:  DateinformationService){ }
        
        ngOnInit(){
            this.getDateInfos();
            this.getGeneralDateInfo(this.actualTour.dateinformations);
        }
        
        getDateInfos(){
            this._dateinfoService.getDates().subscribe(res => { this.arrayOfAllDateInfo = res;});
        }
        
        getGeneralDateInfo(dateinformations){
            for(let dateinf of dateinformations){
                this._dateinfoService.getByIdDateInfo(dateinf.id)
                .subscribe(res => {
                    this.arrayOfDateInfo.push(res);
                });
            }
            
            
        }
        
        
    }