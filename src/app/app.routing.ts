import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LoginComponent} from './controllers/login/login.component';
import { NeedAuthGuard } from './NeedAuthGuard.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [NeedAuthGuard],
    runGuardsAndResolvers: 'always',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' //takes all the routes of admin-routes
      }
    ]}, {
        path: 'login',
        component: LoginComponent
    }
  ];

  @NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [
      RouterModule
    ],
  })
  export class AppRoutingModule { }