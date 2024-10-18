import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMarkerDelivered]',
  standalone: true
})
export class MarkerDeliveredDirective implements OnInit {
  @Input()appMarkerDelivered: boolean = true;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appMarkerDelivered ? "#3B82F6" : "#e5e7eb" ;
    this.el.nativeElement.style.border = this.appMarkerDelivered ? "2px solid #3B82F6" : "2px solid #e5e7eb"
  }
}
