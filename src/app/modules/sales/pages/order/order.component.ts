import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbService} from "../../../shared/services/breadcrumb/breadcrumb.service";
import {Breadcrumb, Header} from "../../../shared/models/breadcrumb";
import {CommonModule} from "@angular/common";
import {Subscription} from "rxjs";
import {TagModule} from "primeng/tag";
import {DragDropModule} from "primeng/dragdrop";
import {PanelModule} from "primeng/panel";
import {OrderService} from "../../../shared/services/sales/order/order.service";
import {Order} from "../../../shared/models/order";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, DragDropModule, TagModule, PanelModule ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit, OnDestroy {
  private subscriber = new Subscription();
  public newOrder: Order[] = [];
  public processingOrder: Order[] = [];
  public shippedOrder: Order[] = [];

  constructor(
      private breadcrumbService: BreadcrumbService,
      private orderService: OrderService
  ) {
  }

  ngOnInit(): void {    const menuItems: Breadcrumb[] = [
    { icon: 'pi pi-home', route: '/home' },
    {label: 'Order'}
  ];
    const header: Header = {
      title: 'Order History',
      breadcrumds: menuItems
    };
    this.breadcrumbService.setHeader(header);

    this.getOrder();
  }

  ngOnDestroy(): void {
  }

  getOrder() {
    this.orderService.getOrder().then(data => {
      this.shippedOrder = data.filter(value => value.status.statusKey === 'shipped');
      this.processingOrder = data.filter(value => value.status.statusKey === 'processing');
      this.newOrder = data.filter(value => value.status.statusKey === 'new');
    });
  }

  draggedOrder: Order | undefined | null;
  dragStart(order: Order) {
    this.draggedOrder = order;
  }

  dragEnd() {
    this.draggedOrder = null;
  }
  drop() {
    if (this.draggedOrder) {
      let draggedProductIndex = this.findIndex(this.draggedOrder);
      this.processingOrder = [...(this.processingOrder as Order[]), this.draggedOrder];
      this.newOrder = this.newOrder?.filter((val, i) => i != draggedProductIndex);
      this.draggedOrder = null;
    }
  }

  findIndex(order: Order) {
    let index = -1;
    for (let i = 0; i < (this.newOrder as Order[]).length; i++) {
      if (order.id === (this.newOrder as Order[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
