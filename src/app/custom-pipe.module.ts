import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyFormatPipe } from './money-format.pipe';
import { SafeNaNPipe } from './safe-na-n.pipe';

@NgModule({
  declarations: [MoneyFormatPipe, SafeNaNPipe],
  imports: [
    CommonModule
  ],
  exports: [MoneyFormatPipe, SafeNaNPipe]
})
export class CustomPipeModule { }
