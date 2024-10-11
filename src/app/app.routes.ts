import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'classification',
    loadChildren: () => import('./modules/items/item.routes').then(m => m.ITEM_ROUTES)
  }
];
