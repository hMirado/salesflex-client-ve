import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {BreadcrumbService} from "../../../shared/services/breadcrumb/breadcrumb.service";
import {Breadcrumb, Header} from "../../../shared/models/breadcrumb";
import {CommonModule} from "@angular/common";
import {Order} from "../../../shared/models/order";
import {SummaryComponent as OrderSummaryComponent} from "./summary/summary.component";
import {TabViewModule} from "primeng/tabview";
import {ButtonModule} from "primeng/button";
import {DetailComponent as OrderDetailComponent} from "./detail/detail.component";
import {ListComponent as OrderListComponent} from "./list/list.component";
import {Color} from "../../../shared/models/color";
import {Card} from "../../../shared/models/card";
import {CardComponent} from "../../../shared/components/card/card.component";
import {OrderService} from "../../../shared/services/sales/order/order.service";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
      CommonModule, OrderSummaryComponent, TabViewModule, ButtonModule, OrderDetailComponent,
    OrderListComponent, CardComponent, NgxChartsModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit, OnDestroy {
  activeIndex = signal(0);
  public allOrder!: Card;
  public todayOrder!: Card;
  public delivredOrder!: Card;
  public shippedOrder!: Card;


  constructor(
      private breadcrumbService: BreadcrumbService,
      private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [
      { icon: 'pi pi-home', route: '/home' },
      {label: 'Order'}
    ];
    const header: Header = {
      title: 'Order',
      breadcrumds: menuItems
    };
    this.breadcrumbService.setHeader(header);
    this.allOrder = {
      title: 'Total Orders',
      subTitle: '1800468',
      icon: 'pi-objects-column',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500'
    };
    this.delivredOrder = {
      title: 'Delivered Orders',
      subTitle: '30',
      icon: 'pi-verified',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-500'
    };
    this.shippedOrder = {
      title: 'Delivered Orders',
      subTitle: '20',
      icon: 'pi-truck',
      iconBg: 'bg-orange-200',
      iconColor: 'text-orange-600'
    };
    this.todayOrder = {
      title: 'Today\'s Orders',
      subTitle: '50',
      icon: 'pi-box',
      iconBg: 'bg-bluegray-100',
      iconColor: 'text-bluegray-500'
    };

    this.getOrderGraph()
  }

  ngOnDestroy(): void {
  }

  chooseTabView(id: number) {
    this.activeIndex.set(id);
  }

  getSeverity(buttonIndex: number): Color {
    return this.activeIndex() !== buttonIndex ? Color.Secondary : Color.Primary;
  }

  data = [];
  view: [number, number]= [800, 200];
  showXAxis = true;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  showDataLabel = true;
  showGridLines = false;
  getOrderGraph() {
    this.orderService.getOrderGraph().then((data: any) => {
      this.data = data;
    })
  }
}
