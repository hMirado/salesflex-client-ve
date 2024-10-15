import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Dialog} from "../../models/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog$: Subject<Dialog> = new Subject<Dialog>();

  constructor() { }

  showDialog(id: string): void {
    this.dialog$.next({dialogId: id, visible: true} as Dialog);
  }

  getOpenedDialog(): Subject<Dialog> {
    return this.dialog$;
  }
}
