import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTablaDirectiva]'
})
export class TablaDirectivaDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.fontWeight = "bold";
    el.nativeElement.style.textAlign = "center";
    el.nativeElement.style.backgroundColor = "#333333";
    el.nativeElement.style.color = "#bbbbbb";

   }

}
