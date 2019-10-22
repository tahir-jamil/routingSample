import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if (value) {
      value = value.toString();
      return ((value) ? value.replace(/\B(?=(\d{3})+(?!\d))/g, "\u0020") : value);
    }

  } 
}

