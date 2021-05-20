import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareNumber'
})
export class SquareNumberPipe implements PipeTransform {

  transform(value: number):number {
    return value*value;
  }

}
