import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
private defaultColor='red';
@Input('appChangecolor') highlightColor:string='';
  constructor(private el:ElementRef) { }

@HostListener('mouseenter') onMouseEnter()
{
  console.log(this.highlightColor);
  this.appChangecolor(this.highlightColor || this.defaultColor);
}
@HostListener('mouseleave') onMouseLeave()
{
  console.log(this.highlightColor);
  this.appChangecolor('');
}
private appChangecolor(color:string)
{
  //this.render.setElementStyle(this.el.nativeElement,'color',color);
  this.el.nativeElement.style.background=color;
  this.highlightColor=color;
}
}
//elementref
//renderer
//hostlistener->to listen the event and respond
//@input-> get the data from parent to child
//@output-> emit the event from child to parent