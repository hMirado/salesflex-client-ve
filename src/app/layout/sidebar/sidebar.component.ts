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
          { label: 'Classification', icon: 'pi pi-fw pi-slack', routerLink: ['/classification'] },
          { label: 'Item', icon: 'pi pi-fw pi-barcode', routerLink: ['/uikit/input'] },
        ]
      },
      {
        label: 'Sales',
        items: [
          { label: 'Order', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/blocks'] },
          { label: 'Delivery', icon: 'pi pi-fw pi-truck', routerLink: ['/blocks'] },
          { label: 'Facture', icon: 'pi pi-fw pi-file', routerLink: ['/blocks'] },
        ]
      },
      {
        label: 'Users',
        items: [
          { label: 'Profile', icon: 'pi pi-fw pi-address-book', routerLink: ['/utilities/icons'] },
          { label: 'User', icon: 'pi pi-fw pi-user', routerLink: ['/blocks'] },
        ]
      }
    ];
  }
}
