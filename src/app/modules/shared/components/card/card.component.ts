import {Component, Input} from '@angular/core';
import {Card} from "../../models/card";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: Card;

}
