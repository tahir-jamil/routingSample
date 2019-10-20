import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    return ((value !== null) ? value.replace(/[\,]/g, ' ') : value);
  } 
}
