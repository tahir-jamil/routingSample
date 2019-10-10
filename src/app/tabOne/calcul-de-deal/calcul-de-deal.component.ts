import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";

@Component({
  selector: 'ns-calcul-de-deal',
  templateUrl: './calcul-de-deal.component.html',
  styleUrls: ['./calcul-de-deal.component.css']
})
export class CalculDeDealComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }
  
  ComparablePrixdevente: any = 1.3495; // = document.getElementById('CDcase1');

  FraisAcquisition: any = 10000; // = document.getElementById('CDcase3');

  CoutRenovation: any = 0; // = document.getElementById('CDcase4');

  FraisCourtierPoucent: any = 0; // = document.getElementById('CDcase5');

  ProfitDesirePoucent: any = 0; // = document.getElementById('CDcase6');

  CedassionPromesse: any = 0; // = document.getElementById('CDcase7');

  FraisCourtier: any = ''; // = document.getElementById('CDcase8');
  estFraisCourtierInvalide = false;

  ProfitPotentiel: any = ''; // = document.getElementById('CDcase9');
  estProfitPotentielInvalide = false;

  PrixAchatTotal: any = ''; // = document.getElementById('CDcase10
  estPrixAchatTotalinvalide = false;



  reset() {
    this.ComparablePrixdevente = 280000;
    this.FraisAcquisition = 10000;
    this.CoutRenovation = 0;
    this.FraisCourtierPoucent = 0;
    this.ProfitDesirePoucent = 0;
    this.CedassionPromesse = 0;
    this.FraisCourtier = '';
    this.estFraisCourtierInvalide = false;
    this.ProfitPotentiel = '';
    this.estProfitPotentielInvalide = false;
    this.PrixAchatTotal = '';
    this.estPrixAchatTotalinvalide = false;
  }

  removeCurrencyPipeFormat(formatedNumber) {
    if (this.isValid(formatedNumber) && typeof formatedNumber === 'number') {
      formatedNumber = String(formatedNumber);
    }
    return formatedNumber.replace(/[$,]/g, '').replace(/ /g, '');
  }

  convertToNumber(formatedNumber) {
    return (+this.removeCurrencyPipeFormat(formatedNumber));
  }



  TotalDealRapide() {
    this.FraisCourtier = this.CalculCDcase8();
    this.ProfitPotentiel = this.CalculCDcase9();
    this.PrixAchatTotal = this.CalculCDcase10();

    if (!isNaN(this.FraisCourtier)) {
      this.estFraisCourtierInvalide = false;
    } else {
      this.FraisCourtier = 'un champ est mal rempli';
      this.estFraisCourtierInvalide = true;
    }
    if (!isNaN(this.ProfitPotentiel)) {
      this.estFraisCourtierInvalide = false;
    } else {
      this.ProfitPotentiel = 'un champ est mal rempli';
      this.estFraisCourtierInvalide = true;
    }
    if (!isNaN(this.PrixAchatTotal)) {
      this.estPrixAchatTotalinvalide = false;
    } else {
      this.PrixAchatTotal = 'un champ est mal rempli';
      this.estPrixAchatTotalinvalide = true;
    }
  }

  CalculCDcase8() {
    return this.convertToNumber(this.ComparablePrixdevente) * (this.FraisCourtierPoucent / 100);
  }

  CalculCDcaseTaxeCourtier1() {
    return (this.CalculCDcase8() * 0.05) + (this.CalculCDcase8() * 0.09975);
  }

  CalculCDcaseTaxeCourtier3() {
    return this.CalculCDcase8() + this.CalculCDcaseTaxeCourtier1();
  }

  CalculCDcase9() {
    return (this.ProfitDesirePoucent / 100) * (this.convertToNumber(this.ComparablePrixdevente) - this.CalculCDcase8());
  }

  CalculCDcase10() {
    return this.convertToNumber(this.ComparablePrixdevente) - this.convertToNumber(this.FraisAcquisition) -
      this.convertToNumber(this.CoutRenovation) - this.convertToNumber(this.CedassionPromesse) - this.CalculCDcaseTaxeCourtier3()
      - this.CalculCDcase9();
  }

  isValid(a) {
    return a !== null && !isNaN(a) && a !== undefined;
  }

  ngOnInit() {
  }

  public show1() {
    TNSFancyAlert.showInfo("Titre de l'alert", "Something finished successfully.", "Compris");
  }
  
  public show2() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  public show3() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  public show4() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  public show5() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  public show6() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  public show7() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  public show8() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  public show9() {
    // TNSFancyAlert.showInfo("{{ 'calculateur.Comparable-Vendu' | L }}", "Something finished successfully.", "Compris");
  }
  
  goBack() {
    this.routerExtensions.back();
  }

}
