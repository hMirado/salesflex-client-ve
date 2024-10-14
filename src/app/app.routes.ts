import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {HttpClientModule} from "@angular/common/http";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'classification',
    loadChildren: () => import('./modules/items/item.routes').then(m => m.ITEM_ROUTES),
  }
];
