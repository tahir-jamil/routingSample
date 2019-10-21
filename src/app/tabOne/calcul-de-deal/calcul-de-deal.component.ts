import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router.module';
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
// import { localize } from "nativescript-localize";
import * as platformModule from 'tns-core-modules/platform';
import { TextField } from "tns-core-modules/ui/text-field";
import { CurrencyPipe } from '@angular/common'

@Component({
  moduleId: module.id,
  selector: 'ns-calcul-de-deal',
  templateUrl: './calcul-de-deal.component.html',
  providers: [CurrencyPipe]
})
export class CalculDeDealComponent implements OnInit {

  public value = "";

   @ViewChild('textfieldref', {static: true}) textfieldref: TextField;

  constructor(private routerExtensions: RouterExtensions, private cdRef: ChangeDetectorRef, private cp: CurrencyPipe) { }
  //------------------------------------------------------------------------------------------------------------
  //prix comparable
  PrixComparable: any = 0;

  get getPrixComparable() {
    return this.PrixComparable;
  }

  public onTextChange(args, value?) {
    // this.textfieldref.nativeElement.__nativeView.getSelectionStart();
    let textfieldValue = '';
    if (args === 'manual') {
      textfieldValue = value;
    } else {
      let textField = <TextField>args.object;
      textfieldValue = textField.text;
    }

    if (textfieldValue) {
      if (textfieldValue.includes("$")) {
        let value = textfieldValue.replace(/\D/g, '');
        setTimeout(() => {
          this.PrixComparable = this.cp.transform(value, 'USD', 'symbol', '1.0'); // $12,345
        }, 100)
      } else {
        setTimeout(() => {
          this.PrixComparable = this.cp.transform(textfieldValue, 'USD', 'symbol', '1.0-0'); // $12,345
        }, 100);
      }
    }
  }

  onSliderValueChange(args) {
    this.PrixComparable = args.value;
    this.TotalDealRapide();
    this.cdRef.detectChanges();
  }
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

  ngOnInit() {
    this.onTextChange('manual', '5000');
  }

  goBack() { this.routerExtensions.back() }

}
