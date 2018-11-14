import { Component, OnInit, Input } from '@angular/core';
import { DateinformationService } from '../../../services/dateinformation.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-abouttime',
    templateUrl: './timeInfo.component.html'
})

export class TimeInfoComponent implements OnInit{
    
    
    @Input() idDateInfos: any[];
    public dateInformations: any[] =  [undefined];
    
    
    
    constructor(
        private _dateService: DateinformationService,
        private activeModal: NgbActiveModal){ }
        
        ngOnInit(){
            
        }
        

        getByIdDateInfo(id){
                this._dateService.getByIdDateInfo(id)
                .subscribe(data => {
                   this.dateInformations[0] = data.date_id.start_date;
                   this.dateInformations[1] = data.date_id.end_date;
                   this.dateInformations[2] = data.hour_id.start_time;
                   this.dateInformations[3] = data.hour_id.end_time;
                });
        }
    }
    