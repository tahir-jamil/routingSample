import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-Calcul-construction-neuve',
  templateUrl: './Calcul-construction-neuve.component.html',
  styleUrls: ['./Calcul-construction-neuve.component.css']
})
export class CalculConstructionNeuveComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
  }

  goBack() {
       this.routerExtensions.back();
  }


}
