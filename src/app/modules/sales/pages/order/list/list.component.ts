import {Component, OnInit} from '@angular/core';
import {Order} from "../../../../shared/models/order";
import {OrderService} from "../../../../shared/services/sales/order/order.service";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ExportComponent} from "../../../../shared/components/file/export/export.component";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {Export} from "../../../../shared/models/export";
import {Color} from "../../../../shared/models/color";
import {DropdownModule} from "primeng/dropdown";
import {TagModule} from "primeng/tag";
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, ExportComponent, TableModule, InputTextModule, FloatLabelModule, DropdownModule, TagModule, CalendarModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  public exportExcel!: Export;
  public exportPdf!: Export;
  public orders: Order[] = [];
  public status: any[] = [];

  constructor(
      private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.status = [
      {name: 'On Delivery'},
      {name:'New Order'},
      {name: 'Delivered'}
    ];
    this.exportExcel = {
      id: 'excel',
      icon: 'excel.svg',
      file: '',
      label: '',
      color: Color.Success
    };
    this.exportPdf = {
      id: 'pdf',
      icon: 'pdf.svg',
      file: '',
      label: '',
      color: Color.Danger
    };
    this.getOrder();
  }

  getOrder() {
    this.orderService.getOrder().then(data => {
      this.orders = data;
    });
  }

  getSeverity(status: string): BadgeColor {
    if (status == 'processing') {return BadgeColor.Warning}
    else if (status == 'shipped') {return BadgeColor.Success}
    return BadgeColor.Info;
  }
}
export enum BadgeColor {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Help = 'help',
  Secondary = 'secondary',
  Contrast = 'contrast',
  Und = 'undefined'
}
