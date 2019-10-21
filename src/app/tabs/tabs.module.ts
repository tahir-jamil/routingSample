import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";
import { TabFourComponent } from "../tabFour/tabFour.component";
import { TabThreeComponent } from "../tabThree/tabThree.component";
import { NgRippleModule } from 'nativescript-ng-ripple';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NgRippleModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "tabOne",
                        outlet: "tabOne",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/tabOne/tabOne.module#TabOneModule",
                    },
                    {
                        path: "teamFour",
                        outlet: "teamFour",
                        component: TabFourComponent,
                    },
                    {
                        path: "tabThree",
                        outlet: "tabThree",
                        component: TabThreeComponent,
                    },
                    {
                        path: "tabTwo",
                        outlet: "tabTwo",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/tabTwo/tabTwo.module#TabTwoModule"
                    }
                ]
            }
        ]),
        
    ],
    declarations: [
        TabsComponent,
        TabThreeComponent,
        TabFourComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }