import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/table-list-rutas', title: 'Rutas',  icon: 'map', class: '' },
    { path: '/user', title: 'Usuarios',  icon:'person', class: '' },
    { path: '/place', title: 'Lugares',  icon:'location_on', class: '' },
    { path: '/bus', title: 'Autobuses',  icon:'directions_bus', class: '' },
    { path: '/icons', title: 'Boletos',  icon:'confirmation_number', class: '' },
    { path: '/purchase', title: 'Compras',  icon:'attach_money', class: '' },
    { path: '/dateinformation', title: 'Horarios',  icon:'access_time', class: '' },
    { path: '/price', title: 'Gestor de Precios',  icon: 'attach_money', class: '' },
    { path: '/company', title: 'Compañias',  icon: 'business', class: '' },
    { path: '/admin', title: 'Admin',  icon:'supervised_user_circle', class: '' },
    { path: '/tour', title: 'Gestor de Tours',  icon:'map', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
