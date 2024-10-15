import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from "../../../../shared/services/breadcrumb/breadcrumb.service";
import {CommonModule} from "@angular/common";
import {Breadcrumb} from "../../../../shared/models/breadcrumb";

@Component({
  selector: 'app-classification-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit{

  constructor(private breadcrumbService: BreadcrumbService,) {
  }

  ngOnInit(): void {
    const menuItems: Breadcrumb[] = [
      { icon: 'pi pi-home', route: '/' },
      {label: 'Classification', route: '/classification'},
      {label: 'Create'}
    ];
    this.breadcrumbService.setMenuItem(menuItems);
  }

}
