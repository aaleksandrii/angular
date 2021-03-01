import {HostBinding, HostListener, Input, Renderer2} from "@angular/core";
import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input('') fontWeight: string = 'normal';
  @Input('dStyles') dStyles: {border?: string, borderRadius?: string};

  @HostBinding('style.color') changeColor = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { // inject here
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color)
    // elementRef.nativeElement.style.color = 'red'
  }

  @HostListener('click', ['$event.target']) handleClick(event: Event) {
    console.log('event', event)
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')

    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', this.fontWeight)

    this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.dStyles.border)
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', this.dStyles.borderRadius)

    this.changeColor = this.color;
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', null)

    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', null)

    this.renderer.setStyle(this.elementRef.nativeElement, 'border', null)
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', null)

    this.changeColor = null;
  }
}
