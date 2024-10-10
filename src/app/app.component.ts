import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopbarComponent} from "./layout/topbar/topbar.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'salesflex-v2-client';
}
