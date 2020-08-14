import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCeldaDirectiva]'
})
export class CeldaDirectivaDirective {

  constructor(private el:ElementRef) { 

    el.nativeElement.style.border = "1px solid #535353";
    el.nativeElement.style.textAlign = "center";
    el.nativeElement.style.minHeight= "40px";
  }

}
