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
import {Classification} from "../../shared/models/classification";
import {ClassificationService} from "../../shared/services/classification/classification.service";

interface expandedRows {
  [key: string]: boolean;
}

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
  public classifications: Classification[] = [];
  expandedRows: expandedRows = {};

  constructor(private breadcrumbService: BreadcrumbService, private classificationService: ClassificationService) {
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
    };
    this.exportPdf = {
      id: 'pdf',
      icon: 'pdf.svg',
      file: '',
      label: '',
      color: Color.Danger
    }

    this.getClassifications();
  }

  getClassifications() {
    this.classificationService.getClassifications().then(data => {
      this.classifications = data
    });
  }
}
