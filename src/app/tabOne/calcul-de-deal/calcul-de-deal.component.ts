import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router.module';
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
// import { localize } from "nativescript-localize";
import * as platformModule from 'tns-core-modules/platform';
import { TextField } from "tns-core-modules/ui/text-field";
import { CurrencyPipe } from '@angular/common'
import { Page } from 'tns-core-modules/ui/page/page';
// import { registerElement } from 'nativescript-angular/element-registry';

// registerElement(
//   'DrawingPad',
//   () => require('nativescript-maskedinput')
// );
@Component({
  moduleId: module.id,
  selector: 'ns-calcul-de-deal',
  templateUrl: './calcul-de-deal.component.html',
  providers: [CurrencyPipe]
})
export class CalculDeDealComponent implements OnInit {

  public value = "";

  @ViewChild('textfieldref', { static: true }) textfieldref: ElementRef;

  constructor(private routerExtensions: RouterExtensions,private page: Page, private cdRef: ChangeDetectorRef, private cp: CurrencyPipe) { }
  //------------------------------------------------------------------------------------------------------------
  //prix comparable
  PrixComparable: any = 32423243240;

  get getPrixComparable() {
    return this.PrixComparable;
  }

  public onTextChange(args, value?) {
    // this.textfieldref.nativeElement.__nativeView.getSelectionStart();
    // let textfieldValue = '';
    // if (args === 'manual') {
    //   textfieldValue = value;
    // } else {
    let textField = <TextField>args.object;
    this.PrixComparable = textField.text;

    // if (platformModule.isAndroid) {
      // setTimeout(() => {
        // this.textfieldref.nativeElement.android.setSelection(
          // this.textfieldref.nativeElement.text.length //maybe this would be enough
          //this.phoneField.nativeElement.android.length()
        // );
      // }, 200);
    // }
    // }

    // if (textfieldValue) {
    //   if (textfieldValue.includes("$")) {
    //     let value = textfieldValue.replace(/\D/g, '');
    //     setTimeout(() => {
    //       this.PrixComparable = this.cp.transform(value, 'USD', 'symbol', '1.0'); // $12,345
    //     }, 100)
    //   } else {
    //     setTimeout(() => {
    //       this.PrixComparable = this.cp.transform(textfieldValue, 'USD', 'symbol', '1.0-0'); // $12,345
    //     }, 100);
    //   }
    // }
  }

  // onSliderValueChange(args) {
  //   this.PrixComparable = args.value;
  //   this.TotalDealRapide();
  //   this.cdRef.detectChanges();
  // }
  //fin prix comparable    
  //-----------------------------------------------------------------------------------------------------------
  //frais acquisition
  FraisAcquisition: any = 1000;
  get getFraisAcquisition() {
    return this.FraisAcquisition;
  }
  public onTextChange1(args) {
    let textField = <TextField>args.object;
    this.FraisAcquisition = textField.text;

    this.TotalDealRapide();
    if (textField.text !== null) {
      this.FraisAcquisition = this.removeCurrencyPipeFormat(textField.text);
    }
    this.cdRef.detectChanges();
  }
  onSliderValueChange1(args) {
    this.FraisAcquisition = args.value;
    this.TotalDealRapide();
    this.cdRef.detectChanges();
  }
  //fin frais acquisition
  //---------------------------------------------------------------------------------------------------------------
  //conversion
  removeCurrencyPipeFormat(formatedNumber) {
    if (typeof formatedNumber === 'number') {
      formatedNumber = String(formatedNumber);
    }
    return formatedNumber.replace(/[$,]/g, '').replace(/ /g, '');
  }

  convertToNumber(formatedNumber) {
    return parseInt(this.removeCurrencyPipeFormat(formatedNumber));
  }





  PrixAchatTotal: any = '';


  TotalDealRapide() {
    this.PrixAchatTotal = this.CalculCDcase10();
  }
  CalculCDcase10() {
    return this.convertToNumber(this.PrixComparable) + this.convertToNumber(this.FraisAcquisition)
  }







  isValid(a) {
    return a !== null && !isNaN(a) && a !== undefined;
  }
  goBack() { this.routerExtensions.back() }

  // private fieldValue: TextField;
  // inputValue: string;
  // private propagateChange = (_: any) => {};

  ngOnInit() {
    // this.onTextChange('manual', '5000');
    // this.fieldValue = <TextField>this.page.getViewById('fieldValue');

  }


  // registerOnChange(fn: any): void {
  //   this.propagateChange = fn;
  // }

  // changeValue(event: any) {
  //   if (event.object.text) {
  //     let value: string = event.object.text;

  //     value = value.replace(/\D/g, '');

  //     if (value.length === 3) {
  //       value = value.replace(/(\d{1})(\d{2})/, '$1$2');
  //     } else if (value.length === 4) {
  //       value = value.replace(/(\d{1})(\d{2})/, '$1 $2');
  //     } else if (value.length === 5) {
  //       value = value.replace(/(\d{2})(\d{3})/, '$1 $2');
  //     } else if (value.length === 6) {
  //       value = value.replace(/(\d{3})(\d{2})/, '$1 $2');
  //     } else if (value.length === 7) {
  //       value = value.replace(/(\d{1})(\d{3})(\d{3})/, '$1 $2 $3');
  //     } else if (value.length === 8) {
  //       value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1 $2 $3');
  //     } else if (value.length === 9) {
  //       value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  //     } else if (value.length === 10) {
  //       value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
  //     } else if (value.length === 11) {
  //       value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
  //     } 
  //     else if (value.length === 12) {
  //       value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
  //     }
  //     else if (value.length === 13) {
  //       value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5');
  //     }
  //     else if (value.length === 14) {
  //       value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5');
  //     }
  //     else if (value.length === 15) {
  //       value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5');
  //     }
  //     else if (value.length === 16) {
  //       value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6');
  //     }
  //     else if (value.length === 17) {
  //       value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6');
  //     }
  //     else if (value.length === 18) {
  //       value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6');
  //     }
  //     else if (value.length === 19) {
  //       value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6 $7');
  //     }
  //      else {
  //       value = value.replace(/(\d{10,})(\d{2})/, '$1.$2');
  //     }

  //     this.inputValue = value;
  //     if (this.page.android) {
  //       this.fieldValue.android.setSelection(this.fieldValue.android.length());
  //     }

  //     const resetedValue = this.prepareToPropagate(value);
  //     this.propagateChange(resetedValue);
  //   } else {
  //    /*  this.propagateChange(''); */
  //   }
  // }

  // private prepareToPropagate(value: string): string {
  //   if (value) {
  //     value = value.replace(/\D/g, '');
  //     const integerPart = value.slice(0, value.length - 2);
  //     const decimalPart = value.slice(value.length - 2);
  //     return parseFloat(integerPart + '.' + decimalPart).toFixed(2);
  //   }

  //   return undefined;
  // }
}
