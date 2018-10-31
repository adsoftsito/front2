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
    { path: '/usuario', title: 'Usuarios',  icon:'person', class: '' },
    { path: '/table-list', title: 'Paradas',  icon:'location_on', class: '' },
    { path: '/typography', title: 'Camiones',  icon:'directions_bus', class: '' },
    { path: '/icons', title: 'Boletos',  icon:'confirmation_number', class: '' },
    
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
