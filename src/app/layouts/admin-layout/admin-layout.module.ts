import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { TableListRutasComponent } from '../../table-list-rutas/table-list-rutas.component';
// controllers:
import { UserComponent } from '../../controllers/user/user.component';
import { AdminComponent } from '../../controllers/admin/admin.component';
import { BraceletComponent } from '../../controllers/bracelet/bracelet.component';
import { BusComponent } from '../../controllers/bus/bus.component';
import { CompanyComponent } from '../../controllers/company/company.component';
import { DateinformationComponent } from '../../controllers/dateinformation/dateinformation.component';
import { PlaceComponent } from '../../controllers/place/place.component';
import { PurchaseComponent } from '../../controllers/purchase/purchase.component';
import { TourComponent } from '../../controllers/tour/tour.component';
import { PriceComponent } from '../../controllers/price/price.component';
import { CreateComponent } from '../../controllers/dateinformation/create/create.component';
import { SelectdateComponent } from '../../controllers/dateinformation/selectdate/selectdate.component';
import {CreatePlaceComponent} from '../../controllers/place/create-place/create-place.component';
import {TicketComponent} from '../../controllers/ticket/ticket.component';
import {LoginComponent} from '../../controllers/login/login.component';
// para el datepicker y timepicker
import { MatDatepickerModule} from '@angular/material';
import { MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSelectModule} from '@angular/material/select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import {
  AgmCoreModule
} from '@agm/core';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    NgbModule,
    MatRadioModule,
    MaterialFileInputModule,
    NgxMaterialTimepickerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9xXq1L6UtsTBi8miLM0FJU2erOkwW_0I'
    }),
  ],
  declarations: [
    DashboardComponent,
    TableListComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    TableListRutasComponent,
    UserComponent,
    AdminComponent,
    BraceletComponent,
    BusComponent,
    CompanyComponent,
    DateinformationComponent,
    PlaceComponent,
    PriceComponent,
    PurchaseComponent,
    TourComponent,
    CreateComponent,
    SelectdateComponent,
    CreatePlaceComponent,
    TicketComponent,
  ]
})

export class AdminLayoutModule {}
