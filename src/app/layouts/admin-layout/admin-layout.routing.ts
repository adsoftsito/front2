import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TableListRutasComponent } from '../../table-list-rutas/table-list-rutas.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
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
import {CreateComponent} from '../../controllers/dateinformation/create/create.component';
import {SelectdateComponent} from '../../controllers/dateinformation/selectdate/selectdate.component';
import {CreatePlaceComponent} from '../../controllers/place/create-place/create-place.component';
import {TicketComponent} from '../../controllers/ticket/ticket.component';

import {NeedAuthGuard} from '../../NeedAuthGuard.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent, canActivate: [NeedAuthGuard] },
    { path: 'table-list',     component: TableListComponent },
    { path: 'table-list-rutas', component: TableListRutasComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'user',        component: UserComponent },
    { path: 'admin',            component: AdminComponent },
    { path: 'bracelet',          component: BraceletComponent},
    { path: 'bus',          component: BusComponent},
    { path: 'company',          component: CompanyComponent},
    { path: 'dateinformation',    component: DateinformationComponent},
    { path: 'place',          component: PlaceComponent},
    { path: 'price',          component: PriceComponent},
    { path: 'purchase',          component: PurchaseComponent},
    { path: 'tour',          component: TourComponent},
    { path: 'create',          component: CreateComponent},
    { path: 'selectdate',          component: SelectdateComponent},
    { path: 'createplace',          component: CreatePlaceComponent},
    { path: 'ticket',        component: TicketComponent},

];
