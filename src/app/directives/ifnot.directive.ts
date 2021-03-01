import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      // показать элементы
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // скрыть элементы
      this.viewContainer.clear()
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,  // код будущего ngTemplate (children)
    private viewContainer: ViewContainerRef // указывает на ngTemplate
  ) { }// сюда инжектируют <-

}
