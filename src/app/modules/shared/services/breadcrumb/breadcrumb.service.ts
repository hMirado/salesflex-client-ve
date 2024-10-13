import {Injectable} from '@angular/core';
import {Breadcrumb} from "../../models/breadcrumb";
import {Subject, BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  $menuItems = new Subject<Breadcrumb[]>();

  constructor() { }

  setMenuItem(menuItmes: Breadcrumb[]): void {
    this.$menuItems.next(menuItmes);
  }
}
