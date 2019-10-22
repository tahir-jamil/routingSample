import { Component, OnInit, Input } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  @Input() title = '';
  @Input() inputValue: string = '0';
  @Input() currencyType: string = '$';
  @Input() hint: string = '$';
  @Input() minValue: string = '0';
  @Input() maxValue: string = '4000';

  private fieldValue: TextField;
  sliderValue;

  private propagateChange = (_: any) => { };

  constructor(private page: Page) { }



  ngOnInit() {
    // this.onTextChange('manual', '5000');
    this.fieldValue = <TextField>this.page.getViewById('fieldValue');

  }


  addFocus() {

    this.fieldValue.focus();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  changeValue(event: any, manual) {
    let value;
    if (event && event.object && event.object.text && event.object.text) {
      this.sliderValue = event.object.text.replace(/\s/g, "");
    }

    if (manual == true) {
      if (event) {
        value = event;
      }
    } else {
      if (event.object.text) {
        value = event.object.text;
      }
    }

    if (value) {
      value = value.toString();
      value = value.replace(/\D/g, '');
      if (parseInt(value) <= parseInt(this.maxValue)) {
        this.calculateValue(value);
      } else {
        this.fieldValue.text = this.maxValue;
        return false;
      }
    }


  }


  calculateValue(value) {

    if (value.length === 3) {
      value = value.replace(/(\d{1})(\d{2})/, '$1$2');
    } else if (value.length === 4) {
      value = value.replace(/(\d{1})(\d{2})/, '$1 $2');
    } else if (value.length === 5) {
      value = value.replace(/(\d{2})(\d{3})/, '$1 $2');
    } else if (value.length === 6) {
      value = value.replace(/(\d{3})(\d{2})/, '$1 $2');
    } else if (value.length === 7) {
      value = value.replace(/(\d{1})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (value.length === 8) {
      value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (value.length === 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (value.length === 10) {
      value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
    } else if (value.length === 11) {
      value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
    }
    else if (value.length === 12) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
    }
    else if (value.length === 13) {
      value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5');
    }
    else if (value.length === 14) {
      value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5');
    }
    else if (value.length === 15) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5');
    }
    else if (value.length === 16) {
      value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6');
    }
    else if (value.length === 17) {
      value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6');
    }
    else if (value.length === 18) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6');
    }
    else if (value.length === 19) {
      value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4 $5 $6 $7');
    }
    else {
      value = value.replace(/(\d{10,})/, '$1');
    }

    this.inputValue = value;

    if (this.page.android) {
      this.fieldValue.android.setSelection(this.fieldValue.android.length());
    }


    const resetedValue = this.prepareToPropagate(value);
    this.propagateChange(resetedValue);
  }

  private prepareToPropagate(value: string): string {
    if (value) {
      value = value.replace(/\D/g, '');
      const integerPart = value.slice(0, value.length - 2);
      const decimalPart = value.slice(value.length - 2);
      return parseFloat(integerPart + '.' + decimalPart).toFixed(2);
    }

    return undefined;
  }

  setSliderValue(value) {

    // let temValue  = value.replace(/\s/g, '');
    // if(temValue) {
    //   this.sliderValue = temValue
    // }
  }

  // slider
  onSliderValueChange(args) {
    this.changeValue(args.value, true);
    // this.TotalDealRapide();
  }
}
