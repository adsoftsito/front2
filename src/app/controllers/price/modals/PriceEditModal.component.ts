import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PriceService } from '../../../services/price.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../custom-validators'

declare const $: any;
@Component({
    templateUrl: './PriceEditModal.component.html',
})

export class NgbdModalEditPrice{ 
}