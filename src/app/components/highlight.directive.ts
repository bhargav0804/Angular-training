import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor="yellow";
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontSize = '30px';
    el.nativeElement.style.fontFamily = 'monospace';
  }

}
