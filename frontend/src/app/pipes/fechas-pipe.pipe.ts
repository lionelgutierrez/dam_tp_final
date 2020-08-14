import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fechasPipe'
})
export class FechasPipePipe extends DatePipe implements PipeTransform {

  transform(value: Date): string {
    return super.transform(value, "dd/MM/yyyy HH:mm:ss");
  }

}
