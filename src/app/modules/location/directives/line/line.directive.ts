import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLine]',
  standalone: true
})
export class LineDirective implements OnInit{
  @Input()appLine: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appLine ? "#3B82F6" : "#e5e7eb";
  }
}
