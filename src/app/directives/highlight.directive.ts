import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    // 通过nativeElement 属性给你了直接访问宿主的DOM元素的能力
  }

  @HostListener('mouseenter') onMouseenter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
