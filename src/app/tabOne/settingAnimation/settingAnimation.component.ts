
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router.module';
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'ns-settingAnimation',
  templateUrl: './settingAnimation.component.html',
  styleUrls: ['./settingAnimation.component.css']
})
export class SettingAnimationComponent implements OnInit {

  favActive = false;
  favAlignTop;
  favAlignRight;
  favButtonMargin;
  favSize;
  firstTap = false;

  constructor() {
  }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.favAlignTop = deviceWidth * 0.15;
    this.favAlignRight = deviceHeight * 0.03;
    this.favButtonMargin = deviceHeight * 0.085;
    this.favSize = deviceHeight * 0.075;
  }




  // fav button
  onButtonTap() {
    this.firstTap = true;
    this.favActive = !this.favActive;
  }

  calcTap() {
  }

  downLoadTap() {
  }

}
