import {Component, computed, effect, Input, OnDestroy, OnInit} from '@angular/core';
import {Breadcrumb, Header} from "../../models/breadcrumb";
import {MenuItem} from "primeng/api";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {RouterModule} from "@angular/router";
import {BreadcrumbService} from "../../services/breadcrumb/breadcrumb.service";
import {Subscription} from "rxjs";
import { CommonModule } from '@angular/common';
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule, RouterModule, CommonModule ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public title: string = '';
  public menuItems: MenuItem[] = [];
  private subscriber = new Subscription();

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.subscriber.add(
      this.breadcrumbService.head$.pipe(
        filter(header => {
          this.title = '';
          this.menuItems = [];
          return header != null
        })
      ).subscribe((header: Header) => {
        this.menuItems = header.breadcrumds;
        this.title = header.title
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
