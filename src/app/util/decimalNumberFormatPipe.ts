import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'decimalNumberFormat'})
export class decimalNumberFormatPipe implements PipeTransform {
  transform(value: string, casas: number): string {



    return value;
  }
}
