import { Component, OnInit } from '@angular/core';
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { Page, Observable, EventData } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-tabThree',
  templateUrl: './tabThree.component.html',
  styleUrls: ['./tabThree.component.css']
})
export class TabThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onWebViewLoaded(args: EventData) {

  }

  onLoadStarted(args) {
    const page: Page = <Page>args.object;
    let message;
    if (!args.error) {
      message = `WebView started loading of ${args.url}`;
    } else {
      message = `Error loading  ${args.url} : ${args.error}`;
    }
    console.log(message);
  }

  public onLoadFinished(args: LoadEventData) {
    const webView = <WebView>args.object,
      jsStr = `var parent = document.getElementsByClassName('site-header').item(0);
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = ".site-header, .site-footer  {display: none !important;}";
      parent.appendChild(style)`;

    if (webView.ios) {
      webView.ios.evaluateJavaScriptCompletionHandler(jsStr,
        function (
          result,
          error
        ) {
          if (error) {
            console.log("error...");
          }
        });
    } else if (webView.android) {
      // Works only on Android 19 and above
      webView.android.evaluateJavascript(
        jsStr,
        null
      );
    }

  }

  // onNavigatingTo(args) {
  //   const page: Page = <Page>args.object;
  //   const vm = new Observable();
  //   vm.set("webViewSrc", "https://docs.nativescript.org/");
  //   vm.set("result", "");
  //   vm.set("tftext", "https://docs.nativescript.org/");
  //   page.bindingContext = vm;
  // }

}
