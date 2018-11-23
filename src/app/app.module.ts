// Import: Modules whose classes are needed by the components of this modules, which means
// that are needed by the declarations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from "@angular/material";
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';
import { BusService} from './services/bus.service';
import { PlaceService} from './services/place.service';
import {DateinformationService} from './services/dateinformation.service';
import { LoginComponent } from './controllers/login/login.component';
import {NeedAuthGuard} from './NeedAuthGuard.component';
import {MatSelectModule} from '@angular/material/select';

import { ModalComponent } from './modals/modal/modal.component';
import { AboutComponent } from './modals/about/about.component';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgbdModalAddAdmin } from './controllers/admin/modals/AdminAddModal.component';
import { NgbdModalEditAdmin} from './controllers/admin/modals/AdminEditModal.component'
import { CompanyService } from './services/company.service';
import { NgbdModalEditCompany } from './controllers/company/modals/CompanyEditModal.component';
import { NgbdModalAddCompany } from './controllers/company/modals/CompanyAddModal.component';
import { PriceService } from './services/price.service';
import { NgbdModalEditPrice } from './controllers/price/modals/PriceEditModal.component';
import { NgbdModalAddPrice } from './controllers/price/modals/PriceAddModal.component';
import { NgbdModalEditTour } from './controllers/tour/modals/TourEditModal.component';
import { NgbdModalAddTour } from './controllers/tour/modals/TourAddModal.component';
import { TicketTypeService } from './services/tickettype.service';
import { TourService } from './services/tour.service';
import { PurchaseService } from './services/purchase.service';
import { PurchaseInfoComponent } from './controllers/purchase/purchase.component';
import { NgbdModalAddBus} from './controllers/bus/modals/BusAddModal.component';
import { NgbdModalEditBus} from './controllers/bus/modals/BusEditModal.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TourInfoComponent } from './controllers/tour/showModals/tourInfo.component';
import { BusInfoComponent } from './controllers/tour/showModals/busInfo.component';
import { TimeInfoComponent } from './controllers/tour/showModals/timeInfo.component';
import { PlaceInfoComponent } from './controllers/tour/showModals/placeInfo.component';
import { MapComponent } from './controllers/map/map.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4rm9L8UDG_OdmRFzLSlzz-lCUfz_zxpQ'
    }),
    NgbModule.forRoot()
  ],
  declarations: [
    //  classes that belong to this module and are related to views.
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    NgbdModalAddAdmin,
    NgbdModalEditAdmin,
    NgbdModalAddCompany,
    NgbdModalEditCompany,
    NgbdModalAddPrice,
    NgbdModalEditPrice,
    NgbdModalAddBus,
    NgbdModalEditBus,
    NgbdModalAddTour,
    NgbdModalEditTour,
    MapComponent,
    AboutComponent,
    ModalComponent,
    TourInfoComponent,
    BusInfoComponent,
    TimeInfoComponent,
    PlaceInfoComponent,
    PurchaseInfoComponent


  ],
  // services
  providers: [UserService,
              AdminService,
              DateinformationService,
              BusService,
              CompanyService, 
              NgbActiveModal,
              PlaceService, 
              PriceService, 
              TicketTypeService, 
              TourService,  
              NeedAuthGuard,
              PurchaseService,],


  // The root component which is the main view of the application
  bootstrap: [AppComponent],
  entryComponents: [
    NgbdModalAddAdmin,
    NgbdModalEditAdmin,
    NgbdModalAddCompany,
    NgbdModalEditCompany,
    NgbdModalAddPrice,
    NgbdModalEditPrice,
    NgbdModalAddTour,
    NgbdModalEditTour,
    NgbdModalAddBus,
    NgbdModalEditBus,
    PurchaseInfoComponent,
    TourInfoComponent,
    BusInfoComponent,
    TimeInfoComponent,
    PlaceInfoComponent,
  ]
})
export class AppModule { }
