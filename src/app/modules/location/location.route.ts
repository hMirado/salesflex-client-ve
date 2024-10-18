import {Routes} from "@angular/router";

export const LOCATION_ROUTES: Routes = [
    {
        path: 'tracking',
        loadComponent: () => import('./pages/tracking/tracking.component').then((component) => component.TrackingComponent)
    },
    {
        path: 'map-tracking',
        loadComponent: () => import('./pages/map/map.component').then((component) => component.MapComponent)
    },
];