import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeft'
})
export class PadLeftPipe implements PipeTransform {

  transform(value: number, quantity: number): unknown {
    return value.toString().padStart(quantity, '0');
  }

}
