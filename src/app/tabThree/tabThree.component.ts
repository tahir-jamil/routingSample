import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { Page, EventData } from 'tns-core-modules/ui/page/page';
import * as SocialShare from "nativescript-social-share";

@Component({
  selector: 'ns-tabThree',
  templateUrl: './tabThree.component.html',
  styleUrls: ['./tabThree.component.css']
})
export class TabThreeComponent implements OnInit {

  public webViewSrc: string = "https://flipimmobilier.com/nos-partenaires/";
  public enabled: boolean = false;

  public touchResult = "Touch: x: _ y: _";

  public canGoBack = false;
  public canGoForword = false;
  public canGoHome = false;

  @ViewChild("myWebView", { read: ElementRef, static: false }) webViewRef: ElementRef;
  @ViewChild("urlField", { read: ElementRef, static: false }) urlFieldRef: ElementRef;

  public goHome() {
    let webview: WebView = this.webViewRef.nativeElement;
    while (webview.canGoBack) {
      webview.goBack();
    }
  }


  goBack() {
    let webview: WebView = this.webViewRef.nativeElement;
    if (webview.canGoBack) {
      webview.goBack();
      this.enabled = true;
    }
  }


  public onLoadStarted(args: LoadEventData) {
    if (!args.error) {
      this.checkGoBack();
      this.checkGoForword();
    } else {

    }
  }

  public checkGoBack() {
    setTimeout(() => {
      if (this.webViewRef.nativeElement) {
        let webview: WebView = this.webViewRef.nativeElement;
        if (webview.canGoBack) {
          this.canGoBack = true;
          this.canGoHome = true;
        } else {
          this.canGoBack = false;
          this.canGoHome = false;
        }
      }
    }, 1000);
  }


  checkGoForword() {
    setTimeout(() => {
      if (this.webViewRef.nativeElement) {
        let webview: WebView = this.webViewRef.nativeElement;
        if (webview.canGoForward) {
          this.canGoForword = true;
        } else {
          this.canGoForword = false;
        }
      }
    }, 1000);
  }

  goForward() {
    let webview: WebView = this.webViewRef.nativeElement;
    if (webview.canGoForward) {
      webview.goForward();
    } else {
      this.enabled = false;
    }
  }

  sharePartner() {
    SocialShare.shareUrl("SHARE WEBADRESS INTO", "L'application #1 Pour l'immobilier au Québec", "Et c'est 100% Gratuit!");
  }

  constructor() { }
  loader = true;

  ngOnInit(): void {
  }

  onWebViewLoaded(args: EventData) {
  }

  public onLoadFinished(args: LoadEventData) {
    const webView = <WebView>args.object,
      jsStr = `var parent = document.getElementsByClassName('site-header').item(0);
         var style = document.createElement('style');
         style.type = 'text/css';
         style.innerHTML = ".site-footer{display:none !important}.form-contact-partner{display:none !important}.icon-share-partner{display:none !important}.listing-address-directions{display:none !important}";
         parent.appendChild(style)`;

    if (webView.ios) {
      // webView.ios.evaluateJavaScriptCompletionHandler(jsStr,
      //   function (result, error) {
      //     if (error) {
      //       console.log("error...bitch");
      //     }
      //   });

    } else if (webView.android) {
      // Works only on Android 19 and above
      // webView.android.evaluateJavascript(
      //   jsStr,
      //   null
      // );
    }

  }

}
