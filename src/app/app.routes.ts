import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/pages/home.component').then((component) => component.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/pages/home.component').then((component) => component.HomeComponent)
  },
  {
    path: '',
    loadChildren: () => import('./modules/items/item.routes').then(m => m.ITEM_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./modules/sales/sale.route').then(m => m.SALE_ROUTES)
  }
];
