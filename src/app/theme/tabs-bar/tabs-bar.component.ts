import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { screen } from 'tns-core-modules/platform';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tu-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.css'],
})

export class TabsBarComponent implements OnInit, OnChanges {

  @Input() tabs;
  @Input() tabsColumns;
  @Input() type = '';
  @Input() tabsbg = 'rgb(244, 246, 252)';
  @Input() row = '0';
  @Input() selectedIndex;
  @Input() scrollable = false;

  visibleDelay = false;

  @Output() indexChange = new EventEmitter;
  @ViewChild('heightTab', { static: true}) heightTab: ElementRef;

  imgwidth;
  imgHeight;
  tabPadding;
  activeTab = 0;
  marginTop = 0;
  tabsListMargin = 0;

  constructor() { }

  ngOnInit(): void {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
      
    this.tabPadding = deviceWidth * 0.025;
  }

  onLoadedBar() {
    this.visibleDelay = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tabs && changes.tabs.currentValue) {
        this.tabs = this.tabs;
    }

    if (changes.tabsColumns && changes.tabsColumns.currentValue) {
        this.tabsColumns = this.tabsColumns;
    }
  }

  onLoaded() {
    setTimeout(() => {
      this.marginTop = this.heightTab.nativeElement.getMeasuredHeight() / screen.mainScreen.scale;
    }, 50);
    this.tabIndexChanged(0, 0);
  }

  tabIndexChanged(newIndex, lastIndex) {
    this.selectedIndex = newIndex;
    this.indexChange.emit(this.selectedIndex);

    if (lastIndex === true) {
      // this.scroll.nativeElement.scrollToHorizontalOffset(60, true)
    }

    if (newIndex === 0) {
      // this.scroll.nativeElement.scrollToHorizontalOffset(-60, true)
    }
  }

  get activeTabIndex() {
    return this.selectedIndex;
  }

}
