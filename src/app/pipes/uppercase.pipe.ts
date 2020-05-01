import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
    transform(value: string,): string {
      if(!value) return ''
    return value.toUpperCase()
  }

}
