import {Component, HostBinding, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
		<ng-container>
      <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">
        {{item.label}}
      </div>
      <a *ngIf="(!item.routerLink || item.items) && item.visible !== false" [attr.href]="item.url" [ngClass]="item.class" [attr.target]="item.target" tabindex="0" pRipple>
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text">{{item.label}}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
      </a>
      <a *ngIf="(item.routerLink && !item.items) && item.visible !== false" [ngClass]="item.class"
         [routerLink]="item.routerLink" routerLinkActive="active-route" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{ paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
         [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment"
         [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state" [queryParams]="item.queryParams"
         [attr.target]="item.target" tabindex="0" pRipple
      >
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text">{{item.label}}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
      </a>
      <ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation">
        <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
          <li>
            <app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></app-menuitem>
          </li>
        </ng-template>
      </ul>
		</ng-container>
    `,
  styleUrls: [
    './menuitem.component.scss'
  ],
  animations: [
    trigger('children', [
      state('collapsed', style({
        height: '0'
      })),
      state('expanded', style({
        height: '*'
      })),
      transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MenuitemComponent {
  @Input() item: any;

  @Input() index!: number;

  @Input() parentKey!: string;

  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;

  active = false;

  key: string = "";

  constructor() {
  }

  get submenuAnimation() {
    return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
  }

  @HostBinding('class.active-menuitem')
  get activeClass() {
    return this.active && !this.root;
  }
}
