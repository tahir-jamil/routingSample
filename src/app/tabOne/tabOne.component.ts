import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "ns-tabOne",
    moduleId: module.id,
    templateUrl: "./tabOne.component.html",
    styleUrls: ["./tabOne.component.css"]
})
export class tabOneComponent implements OnInit {


    numItems;
    currentPagerIndex = 0;
    latestReceivedIndex = 0;
    items: any;
    tabs;

    @ViewChild('pager', { static: true }) pager: any;
    // tslint:disable-next-line:semicolon
    public templateSelector = (item: any, index: number) => {
        switch (item.key) {
            case 'calcOne': {
                return 'calcOne'
            }
                break;
            case 'calcTwo': {
                return 'calcTwo'
            }
                break;
            case 'calcThree': {
                return 'calcThree'
            }
                break;
            case 'calcFour': {
                return 'calcFour'
            }
                break;

            default:
                return 'calcOne'
                break;
        }
    }

    constructor(private routerExtension: RouterExtensions) {
    }

    ngOnInit(): void {
        this.items = [
            { key: 'calcOne', title: 'calcul De Deal' },
            { key: 'calcTwo', title: 'calcu Immeuble Six' },
            { key: 'calcThree', title: 'calcul-pret-conventionnel' },
            { key: 'calcFour', title: 'calcul-pret-prive' }
        ]

        this.tabs = [
            { name: 'Calcul De Deal' },
            { name: 'Calcu Immeuble Six' },
            { name: 'Calcul-pret-conventionnel' },
            { name: 'Calcul-pret-prive' },
        ]
    }

    loadedImage($event) {
        console.log(`loaded image ${JSON.stringify($event)}`);
    }

    // prevPage() {
    //     // this.debugObj(this.pager);
    //     const newIndex = Math.max(0, this.currentPagerIndex - 1);
    //     this.currentPagerIndex = newIndex;
    //     this.latestReceivedIndex = newIndex;
    // }

    // nextPage() {
    //     const newIndex = Math.min(this.numItems - 1, this.currentPagerIndex + 1);
    //     this.currentPagerIndex = newIndex;
    //     this.latestReceivedIndex = newIndex;
    // }

    onIndexChanged($event) {
        // debugObj($event);
        this.latestReceivedIndex = $event.value;
        this.currentPagerIndex = $event.value;
    }

    tabIndexChanged(index) {
    this.currentPagerIndex = index;
  }

    back() {
        this.routerExtension.back();
    }


}
