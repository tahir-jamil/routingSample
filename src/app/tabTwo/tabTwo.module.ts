import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TabTwoComponent } from './tabTwo.component';
import { CalculHypothequeComponent } from './Calcul-hypotheque/Calcul-hypotheque.component';
import { CalculTxBienvenueComponent } from './Calcul-tx-bienvenue/Calcul-tx-bienvenue.component';
import { CalculConstructionNeuveComponent } from './Calcul-construction-neuve/Calcul-construction-neuve.component';
import { CalculHypothequeRestantComponent } from './Calcul-hypotheque-restant/Calcul-hypotheque-restant.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "tabTwo" },
      { path: "tabTwo", component: TabTwoComponent},
      { path: "CalculHypotheque", component: CalculHypothequeComponent},
      { path: "CalculTxBienvenue", component: CalculTxBienvenueComponent},
      { path: "CalculConstructionNeuve", component: CalculConstructionNeuveComponent},
      { path: "CalculHypothequeRestant", component: CalculHypothequeRestantComponent},
    ])
  ],

  declarations: [
    CalculHypothequeComponent,
    CalculTxBienvenueComponent,
    CalculConstructionNeuveComponent,
    CalculHypothequeRestantComponent,
    TabTwoComponent
  ]
})
export class TabTwoModule { }
