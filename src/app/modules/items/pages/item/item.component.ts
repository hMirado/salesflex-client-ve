import {Component, OnDestroy, OnInit} from '@angular/core';
import {Export} from "../../../shared/models/export";
import {Breadcrumb, Header} from "../../../shared/models/breadcrumb";
import {Color} from "../../../shared/models/color";
import {BreadcrumbService} from "../../../shared/services/breadcrumb/breadcrumb.service";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ExportComponent} from "../../../shared/components/file/export/export.component";
import {TableModule} from "primeng/table";
import {ItemService} from "../../../shared/services/item/item.service";
import {Subscription} from "rxjs";
import {Item} from "../../../shared/models/item";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, ButtonModule, ExportComponent, TableModule, InputTextModule, FloatLabelModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit, OnDestroy {
  public exportExcel!: Export;
  public exportPdf!: Export;
  private subscriber = new Subscription();
  public items: Item[] = [];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private itemService: ItemService
  ) {
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [
      { icon: 'pi pi-home', route: '/home' },
      {label: 'Item'}
    ];
    const header: Header = {
      title: 'ITEM',
      breadcrumds: menuItems
    };
    this.breadcrumbService.setHeader(header);

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

    this.getItems();
  }

  ngOnDestroy(): void {
  }

  getItems() {
      this.itemService.getItems().then(data => {
        this.items = data;
      });
  }

  getRandomCategory() {
    const categories = ["Informatics", "Office furniture", "OTHER"];
    const random = Math.floor(Math.random() * categories.length);
    return categories[random];
  }

  getRandomType() {
    const types = ["PC", "Monitor", "Firewall", "Climatisation", "Table", "Onduleur"];
    const random = Math.floor(Math.random() * types.length);
    return types[random];
  }

  getRandomBrand() {
    const brands = ["APPLE", "ACER", "HP", "Lenovo", "Viewsonic", "Samsung"];
    const random = Math.floor(Math.random() * brands.length);
    return brands[random];
  }
}
