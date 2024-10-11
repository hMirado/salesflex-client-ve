import {Component, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../../shared/components/breadcrumb/breadcrumb.component";
import {BreadcrumbService} from "../../shared/services/breadcrumb/breadcrumb.service";
import {Breadcrumb} from "../../shared/models/breadcrumb";

@Component({
  selector: 'app-classification',
  standalone: true,
  imports: [],
  templateUrl: './classification.component.html',
  styleUrl: './classification.component.scss'
})
export class ClassificationComponent implements OnInit{

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [
      { icon: 'pi pi-home', route: '/' },
      {label: 'Classification'}
    ];
    this.breadcrumbService.setMenuItem(menuItems);
  }
}
