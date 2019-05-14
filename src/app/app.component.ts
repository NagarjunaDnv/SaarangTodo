import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenorientation:ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(cordova.platformId="ios"){
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#B3FCFFFE')
        this.statusBar.styleLightContent()
        this.statusBar.show()
        }
        if(cordova.platformId="android"){
          this.statusBar.overlaysWebView(true)
          this.statusBar.backgroundColorByHexString('#B3FCFFFE')
          this.statusBar.show()
        }
        this.screenorientation.lock(this.screenorientation.ORIENTATIONS.PORTRAIT)
    });

  }
}
