import {Component, computed, effect, Input, OnDestroy, OnInit} from '@angular/core';
import {Breadcrumb} from "../../models/breadcrumb";
import {MenuItem} from "primeng/api";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {RouterModule} from "@angular/router";
import {BreadcrumbService} from "../../services/breadcrumb/breadcrumb.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule, RouterModule ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public menuItems: MenuItem[] = [];
  private subscriber = new Subscription();

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.subscriber.add(
      this.breadcrumbService.$menuItems.subscribe((menus: Breadcrumb[]) => {
        this.menuItems = menus
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
