import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router.module';

@Component({
  selector: 'ns-calcul-de-deal',
  templateUrl: './calcul-de-deal.component.html',
  styleUrls: ['./calcul-de-deal.component.css']
})
export class CalculDeDealComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
  }

  goBack() {
       this.routerExtensions.back();
  }

}
