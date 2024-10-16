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
  fromOrder: string = ''
  dragStart(order: Order, from: string) {
    this.draggedOrder = order;
    this.fromOrder = from
  }

  dragEnd() {
    this.draggedOrder = null;
  }

  drop(to: string = '') {
    console.log(this.fromOrder + ' => ' + to);
    
    if (this.draggedOrder) {
      let draggedProductIndex = this.findIndex(this.draggedOrder, this.fromOrder);
      if (this.fromOrder == 'new' && to == 'processing') {
        this.newOrder = this.newOrder?.filter((val, i) => i != draggedProductIndex);
        if (!this.processingOrder.includes(this.draggedOrder)) {
          this.processingOrder = [...(this.processingOrder as Order[]), this.draggedOrder];
        }
      } else if (this.fromOrder == 'processing' && to == 'shipped') {
        this.processingOrder = this.processingOrder?.filter((val, i) => i != draggedProductIndex);
        if (!this.shippedOrder.includes(this.draggedOrder)) {
          this.shippedOrder = [...(this.shippedOrder as Order[]), this.draggedOrder];
        }
      }
      this.draggedOrder = null;
    }
  }

  findIndex(order: Order, from: string) {
    let _order;
    if (from == 'new') _order = this.newOrder;
    if (from == 'processing') _order = this.processingOrder;
    let index = -1;
    for (let i = 0; i < (_order as Order[]).length; i++) {
      if (order.id === (_order as Order[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
