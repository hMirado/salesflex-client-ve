import { Routes } from "@angular/router";
import {ClassificationComponent} from "./classification/classification.component";
import {CreateComponent as CreateClassificationComponent} from "./classification/create/create.component";

export const ITEM_ROUTES: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: ''
  },
  {
    path: '',
    component: ClassificationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'classification'
      },
      {
        path: 'create',
        component: CreateClassificationComponent
      }
    ]
  }
];
