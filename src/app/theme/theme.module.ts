import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsBarComponent } from './tabs-bar/tabs-bar.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NativeScriptFormsModule,
  ],
  declarations: [TabsBarComponent, TextfieldComponent],
  exports: [TabsBarComponent, TextfieldComponent]
})

export class ThemeModule { }
