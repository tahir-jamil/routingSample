import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-calcul-pret-conventionnel',
  templateUrl: './calcul-pret-conventionnel.component.html',
  styleUrls: ['./calcul-pret-conventionnel.component.css']
})
export class CalculPretConventionnelComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
  }

  goBack() {
       this.routerExtensions.back();
  }

}
