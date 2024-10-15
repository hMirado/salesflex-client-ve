import {Injectable} from '@angular/core';
import {Header} from "../../models/breadcrumb";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  head$ = new Subject<Header | null>();

  constructor() { }

  setHeader(head: Header | null): void {
    this.head$.next(head);
  }
}
