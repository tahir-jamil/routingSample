import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-Calcul-hypotheque',
  templateUrl: './Calcul-hypotheque.component.html',
  styleUrls: ['./Calcul-hypotheque.component.css']
})
export class CalculHypothequeComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
  }

  goBack() {
       this.routerExtensions.back();
  }


}
