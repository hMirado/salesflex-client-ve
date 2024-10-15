import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {DialogService} from "../../services/dialog/dialog.service";
import {filter, Subscription} from "rxjs";
import {Dialog} from "../../models/dialog";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  visible: boolean = false;
  private subscriber = new Subscription();
  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.showDialog();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  showDialog(): void {
    this.subscriber.add(
      this.dialogService.getOpenedDialog().pipe(
        filter((value: Dialog) => value != null && value.dialogId == this.id)
      ).subscribe((value: Dialog) => this.visible = value.visible)
    )
  }
}
