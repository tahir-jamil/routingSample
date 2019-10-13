import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CalculDeDealComponent } from './calcul-de-deal/calcul-de-deal.component';
import { CalculImmeubleSixComponent } from './calcul-immeuble-six/calcul-immeuble-six.component';
import { CalculPretConventionnelComponent } from './calcul-pret-conventionnel/calcul-pret-conventionnel.component';
import { CalculPretPriveComponent } from './calcul-pret-prive/calcul-pret-prive.component';
import { tabOneComponent } from './tabOne.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { PagerModule } from "nativescript-pager/angular";
import { TabsBarComponent } from '../theme/components/tabs-bar';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { NgShadowModule } from "nativescript-ngx-shadow";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "tabOne" },
      { path: "tabOne", component: CalculDeDealComponent },
      { path: "calculDeDeal", component: CalculDeDealComponent },
      { path: "calculImmeubleSix", component: CalculImmeubleSixComponent },
      { path: "calculPretConventionnel", component: CalculPretConventionnelComponent },
      { path: "calculPretPrive", component: CalculPretPriveComponent },
    ]),
    NativeScriptFormsModule,
    PagerModule,
    NgRippleModule,
    NgShadowModule
  ],
  declarations: [
    CalculDeDealComponent,
    CalculImmeubleSixComponent,
    CalculPretConventionnelComponent,
    CalculPretPriveComponent,
    tabOneComponent,
    TabsBarComponent
  ]
})
export class TabOneModule { }
