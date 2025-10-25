import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  elementRef = inject(ElementRef);
  appHighlight = input<string>();
  constructor() {
    // Using effect to react to input property changes.
    effect(() => {
      this.elementRef.nativeElement.style.backgroundColor = this.appHighlight();
    })
  }
}
