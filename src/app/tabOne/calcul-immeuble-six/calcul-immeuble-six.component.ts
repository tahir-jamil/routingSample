import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router.module';

@Component({
  selector: 'ns-calcul-immeuble-six',
  templateUrl: './calcul-immeuble-six.component.html',
  styleUrls: ['./calcul-immeuble-six.component.css']
})
export class CalculImmeubleSixComponent implements OnInit {


  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {

  }

  goBack() {
       this.routerExtensions.back();
  }


}
