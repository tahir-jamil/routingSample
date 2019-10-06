import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, DataItem } from "../data.service";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-tabOne",
    moduleId: module.id,
    templateUrl: "./tabOne.component.html",
})
export class tabOneComponent implements OnInit {

    constructor(
        private routerExtension: RouterExtensions,
    ) { }

    ngOnInit(): void {
    }

    back() {
        this.routerExtension.back();
    }
}
