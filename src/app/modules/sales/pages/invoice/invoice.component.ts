import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from "../../../shared/services/breadcrumb/breadcrumb.service";
import {Breadcrumb, Header} from "../../../shared/models/breadcrumb";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import {CommonModule} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {ScrollPanelModule} from "primeng/scrollpanel";
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [ CommonModule, IconFieldModule, InputIconModule, InputTextModule, PanelModule, ScrollPanelModule, DividerModule, MessagesModule ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [
      { icon: 'pi pi-home', route: '/home' },
      {label: 'Invoice'}
    ];
    const header: Header = {
      title: 'Invoice',
      breadcrumds: menuItems
    };
    this.breadcrumbService.setHeader(header);
  }

}
