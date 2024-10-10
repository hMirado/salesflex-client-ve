import {Component, ElementRef, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputSwitchModule} from "primeng/inputswitch";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    ButtonModule,
    InputSwitchModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
}
