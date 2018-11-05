import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TableListRutasComponent } from './table-list-rutas/table-list-rutas.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditComponent } from './edit/edit.component';
import { BusComponent } from './bus/bus.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './services/admin.service';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
// import { CreateComponent } from './create/create.component';

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
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EditComponent,
    CreateUsuarioComponent
    // BusComponent,
    // AdminComponent
    // CreateComponent,
    // UsuarioComponent
    // TableListRutasComponent,

  ],
  providers: [UsuarioService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
