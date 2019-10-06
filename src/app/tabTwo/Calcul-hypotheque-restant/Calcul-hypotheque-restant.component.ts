import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-Calcul-hypotheque-restant',
  templateUrl: './Calcul-hypotheque-restant.component.html',
  styleUrls: ['./Calcul-hypotheque-restant.component.css']
})
export class CalculHypothequeRestantComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
  }

  goBack() {
       this.routerExtensions.back();
  }


}
