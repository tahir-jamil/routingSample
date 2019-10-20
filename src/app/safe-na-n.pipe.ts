import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeNaN'
})
export class SafeNaNPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return ((isNaN(value)) ? "" : value);
  }

}
