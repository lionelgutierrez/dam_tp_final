import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aperturaPipe'
})
export class AperturaPipePipe implements PipeTransform {

  transform(value: number): string {
    return value == 0 ? "Cerrada" : "Abierta";
  }

}
