import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProfile]'
})
export class ProfileDirective {

  @Input()
  isHidden: boolean;

  constructor(private el: ElementRef, private render: Renderer2) { }
  numberOfClicks: number = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    
  }

}
