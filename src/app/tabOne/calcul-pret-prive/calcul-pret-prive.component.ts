import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-calcul-pret-prive',
  templateUrl: './calcul-pret-prive.component.html',
  styleUrls: ['./calcul-pret-prive.component.css']
})
export class CalculPretPriveComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
  }

  goBack() {
       this.routerExtensions.back();
  }

}
