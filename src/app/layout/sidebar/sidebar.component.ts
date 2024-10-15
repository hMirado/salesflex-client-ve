import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MenuitemComponent} from "./menuitem.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MenuitemComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  model: any[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home'] }
        ]
      },
      {
        label: 'Items',
        items: [
          { label: 'Classification', icon: 'pi pi-fw pi-slack', routerLink: ['classification'] },
          { label: 'Item', icon: 'pi pi-fw pi-barcode', routerLink: ['item'] },
        ]
      },
      {
        label: 'Sales',
        items: [
          { label: 'Order', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/order'] },
          { label: 'Delivery', icon: 'pi pi-fw pi-truck', routerLink: ['/delivery'] },
          { label: 'Invoice', icon: 'pi pi-fw pi-file', routerLink: ['/invoice'] },
        ]
      },
      {
        label: 'Settings',
        items: [
          { label: 'Company', icon: 'pi pi-fw pi-sliders-h', routerLink: ['/utilities/icons'] },
          { label: 'Profile', icon: 'pi pi-fw pi-address-book', routerLink: ['/utilities/icons'] },
          { label: 'User', icon: 'pi pi-fw pi-user', routerLink: ['/blocks'] },
        ]
      }
    ];
  }
}
