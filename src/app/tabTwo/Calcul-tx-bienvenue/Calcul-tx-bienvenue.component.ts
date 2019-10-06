import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-Calcul-tx-bienvenue',
  templateUrl: './Calcul-tx-bienvenue.component.html',
  styleUrls: ['./Calcul-tx-bienvenue.component.css']
})
export class CalculTxBienvenueComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
  }

  goBack() {
       this.routerExtensions.back();
  }

}
