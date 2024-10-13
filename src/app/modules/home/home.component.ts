import {AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {Card} from "../shared/models/card";
import {CardComponent} from "../shared/components/card/card.component";
import {TableModule} from "primeng/table";
import {Item} from "../shared/models/item";
import {ITEMS} from "../../../assets/demo/constant";
import {ChartModule} from "primeng/chart";
import {window} from "rxjs/operators";
import { Breadcrumb } from '../shared/models/breadcrumb';
import { BreadcrumbService } from '../shared/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, TableModule, ChartModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit  {
  public orderToDay: Card;
  public deliveredToDay: Card;
  public items: Item[] = [];
  public chartData: any;
  public chartOptions: any;

  constructor(private breadcrumbService: BreadcrumbService) {
    this.orderToDay = {
      title: 'Total today Order',
      subTitle: '100',
      icon: 'pi-cart-plus',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500'
    };
    this.deliveredToDay = {
      title: 'Total Delivered today',
      subTitle: '55',
      icon: 'pi-cart-plus',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500'
    }
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [];
    this.breadcrumbService.setMenuItem(menuItems);
    this.items = ITEMS;
    this.initChart();
  }

  ngAfterViewInit(): void {
  }

  initChart() {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: '#465161',
          borderColor: '#465161',
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: '#1da750',
          borderColor: '#1da750',
          tension: .4
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#4b5563'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#6b7280'
          },
          grid: {
            color: '#dfe7ef',
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: '#6b7280'
          },
          grid: {
            color: '#dfe7ef',
            drawBorder: false
          }
        }
      }
    };
  }
}
