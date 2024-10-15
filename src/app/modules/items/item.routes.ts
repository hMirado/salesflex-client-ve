import {Routes} from "@angular/router";

export const ITEM_ROUTES: Routes = [
    {
        path: 'item',
        loadComponent: () => import('./pages/item/item.component').then((component) => component.ItemComponent)
    },
    {
        path: 'classification',
        loadComponent: () => import('./pages/classification/classification.component').then((component) => component.ClassificationComponent)
    }
];
