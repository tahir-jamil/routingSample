import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { Page, EventData } from 'tns-core-modules/ui/page/page';
// import * as SocialShare from "nativescript-social-share";

@Component({
  selector: 'ns-tabThree',
  templateUrl: './tabThree.component.html',
  styleUrls: ['./tabThree.component.css']
})
export class TabThreeComponent implements OnInit {

  public webViewSrc: string = "https://flipimmobilier.com/nos-partenaires/";
  public enabled: boolean = false;
  public canBackColor: boolean = false;

  @ViewChild("myWebView", { read: ElementRef, static: false }) webViewRef: ElementRef;
  @ViewChild("urlField", { read: ElementRef, static: false }) urlFieldRef: ElementRef;

  public goHome(labelRef) {
    this.setActiveColor(labelRef);
    let webview: WebView = this.webViewRef.nativeElement;
    while (webview.canGoBack) {
      webview.goBack();
    }
  }

  goBack(labelRef) {
    this.setActiveColor(labelRef);
    let webview: WebView = this.webViewRef.nativeElement;
    if (webview.canGoBack) {
      webview.goBack();
      this.enabled = true;
    }
  }

  setActiveColor(labelRef) {
    labelRef.color = "red";
    setTimeout(() => {
      labelRef.color = "black";
    }, 200);
  }

  goForward(labelRef) {
    this.setActiveColor(labelRef);
    let webview: WebView = this.webViewRef.nativeElement;
    if (webview.canGoForward) {
      webview.goForward();
    } else {
      this.enabled = false;
    }
  }

  sharePartner() {
    // SocialShare.shareUrl("SHARE WEBADRESS INTO", "L'application #1 Pour l'immobilier au Québec", "Et c'est 100% Gratuit!");
  }

  constructor() { }
  loader = true;

  ngOnInit(): void {
  }

  onWebViewLoaded(args: EventData) {
  }

  onLoadStarted(args) {
    this.loader = true;
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
         style.innerHTML = ".site-footer{display:none !important}.form-contact-partner{display:none !important}.icon-share-partner{display:none !important}.listing-address-directions{display:none !important}";
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

}
