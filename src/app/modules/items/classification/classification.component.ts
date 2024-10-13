import {Component, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../../shared/components/breadcrumb/breadcrumb.component";
import {BreadcrumbService} from "../../shared/services/breadcrumb/breadcrumb.service";
import {Breadcrumb} from "../../shared/models/breadcrumb";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ExportComponent } from '../../shared/components/file/export/export.component';
import { Export } from '../../shared/models/export';
import { Color } from '../../shared/models/color';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-classification',
  standalone: true,
  imports: [ CommonModule, ButtonModule, ExportComponent, TableModule ],
  templateUrl: './classification.component.html',
  styleUrl: './classification.component.scss'
})
export class ClassificationComponent implements OnInit{
  public exportExcel!: Export;
  public exportPdf!: Export;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [
      { icon: 'pi pi-home', route: '/' },
      {label: 'Classification'}
    ];
    this.breadcrumbService.setMenuItem(menuItems);

    this.exportExcel = {
      id: 'excel',
      icon: 'excel.svg',
      file: '',
      label: '',
      color: Color.Success
    }
    this.exportPdf = {
      id: 'pdf',
      icon: 'pdf.svg',
      file: '',
      label: '',
      color: Color.Danger
    }
  }
}
