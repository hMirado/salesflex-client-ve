import { Routes } from "@angular/router";
export const SALE_ROUTES: Routes = [
    {
        path:'order',
        loadComponent:() => import('./pages/order/order.component').then((component) => component.OrderComponent)
    },
    {
        path:'delivery',
        loadComponent:() => import('./pages/delivery/delivery.component').then((component) => component.DeliveryComponent)
    },
    {
        path:'invoice',
        loadComponent:() => import('./pages/invoice/invoice.component').then((component) => component.InvoiceComponent)
    },
];