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

import { ModalComponent } from './modals/modal.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgbdModalAddAdmin } from './controllers/admin/modals/AdminAddModal.component';
import { NgbdModalEditAdmin} from './controllers/admin/modals/AdminEditModal.component'
import { CompanyService } from './services/company.service';
import { NgbdModalEditCompany } from './controllers/company/modals/CompanyEditModal.component';
import { NgbdModalAddCompany } from './controllers/company/modals/CompanyAddModal.component';
import { NgbdModalAddBus} from './controllers/bus/modals/BusAddModal.component';
import { NgbdModalEditBus} from './controllers/bus/modals/BusEditModal.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


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
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
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
    NgbdModalAddBus,
    NgbdModalEditBus
   

    
   
    // EditComponent//this one takes all the controllers within
  ],
  // services
  providers: [UserService,AdminService,DateinformationService,BusService, CompanyService, NgbActiveModal,PlaceService],

  // The root component which is the main view of the application
  bootstrap: [AppComponent],
  entryComponents: [
    NgbdModalAddAdmin,
    NgbdModalEditAdmin,
    NgbdModalAddCompany,
    NgbdModalEditCompany,
    NgbdModalAddBus,
    NgbdModalEditBus,
    
  ]
})
export class AppModule { }
