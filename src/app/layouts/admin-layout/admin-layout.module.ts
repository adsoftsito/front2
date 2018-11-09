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
//controllers:
import { UserComponent } from '../../controllers/user/user.component';
import { AdminComponent } from '../../controllers/admin/admin.component';
import { BraceletComponent } from '../../controllers/bracelet/bracelet.component';
import { BusComponent } from '../../controllers/bus/bus.component';
import { CompanyComponent } from '../../controllers/company/company.component';
import { DateinformationComponent } from '../../controllers/dateinformation/dateinformation.component';
import { MuralComponent } from '../../controllers/mural/mural.component';
import { PlaceComponent } from '../../controllers/place/place.component';
import { PurchaseComponent } from '../../controllers/purchase/purchase.component';
import { TourComponent } from '../../controllers/tour/tour.component';
import { PriceComponent } from '../../controllers/price/price.component';
import { CreateComponent } from '../../controllers/dateinformation/create/create.component';
import { EditComponent } from '../../controllers/dateinformation/edit/edit.component';
// para el datepicker
import { MatDatepickerModule} from '@angular/material';
import { MatNativeDateModule} from '@angular/material';

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
    MatNativeDateModule
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
    MuralComponent,
    PlaceComponent,
    PriceComponent,
    PurchaseComponent,
    TourComponent,
    CreateComponent,
    EditComponent
  ]
})

export class AdminLayoutModule {}
