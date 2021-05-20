import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appDescriptionBackground]'
})
export class DescriptionBackgroundDirective {
  //  private defaultColor='red';
  // @Input('appDescriptionBackground') highlightColor:string='';
  constructor(private el:ElementRef) { 
    el.nativeElement.style.background="yellow";
  
  // @HostListener('mouseenter') onMouseEnter()
  // {
  //   console.log(this.highlightColor);
  //   this.appDescriptionBackground(this.highlightColor || this.defaultColor);
  // }
  // @HostListener('mouseleave') onMouseLeave()
  // {
  //   console.log(this.highlightColor);
  //   this.appDescriptionBackground('');
  // }
  }
  }

