import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbService} from "../../../shared/services/breadcrumb/breadcrumb.service";
import {Breadcrumb, Header} from "../../../shared/models/breadcrumb";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ExportComponent } from '../../../shared/components/file/export/export.component';
import { Export } from '../../../shared/models/export';
import { Color } from '../../../shared/models/color';
import { TableModule } from 'primeng/table';
import {Classification} from "../../../shared/models/classification";
import {ClassificationService} from "../../../shared/services/classification/classification.service";
import {RouterModule} from "@angular/router";
import {DialogComponent} from "../../../shared/components/dialog/dialog.component";
import {DialogService} from "../../../shared/services/dialog/dialog.service";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DividerModule} from "primeng/divider";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-classification',
  standalone: true,
  imports: [ CommonModule, ButtonModule, ExportComponent, TableModule, RouterModule, DialogComponent, FloatLabelModule, FormsModule, ReactiveFormsModule, InputTextModule, DividerModule  ],
  templateUrl: './classification.component.html',
  styleUrl: './classification.component.scss'
})
export class ClassificationComponent implements OnInit, OnDestroy {
  public exportExcel!: Export;
  public exportPdf!: Export;
  public classifications: Classification[] = [];
  public formGroup!: FormGroup;
  public dialogIsOpen: boolean = false;
  private subscriber = new Subscription();

  constructor(
    private breadcrumbService: BreadcrumbService,
    private classificationService: ClassificationService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [
      { icon: 'pi pi-home', route: '/' },
      {label: 'Classification'}
    ];
    const header: Header = {
      title: 'ITEM CLASSIFICATION',
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

    this.getClassifications();
  }

  ngOnDestroy(): void {
  }

  getClassifications() {
      this.classificationService.getClassifications().then(data => {
        this.classifications = data;
      })
  }

  addSubClassification(classificationId: number) {
    this.dialogIsOpen = true;
    this.createForm(classificationId);
    this.dialogService.showDialog('add-sub-classification');
  }

  createForm(classificationId: number) {
    this.formGroup = this.formBuilder.group({
      id: [classificationId,  Validators.required],
      fieldGroup: this.formBuilder.array([])
    });
    this.addRow();
  }

  get fieldGroup(): FormArray {
    return this.formGroup.get('fieldGroup') as FormArray;
  }

  addRow() {
    const group = this.formBuilder.group({
      classificationValueKey: ['', Validators.required],
      classificationValueName: ['', Validators.required]
    });
    this.fieldGroup.push(group);
  }

  removeRow(index: number) {
    this.fieldGroup.removeAt(index);
  }

  save() {
    console.log(this.formGroup.value)
  }
}
