import { Component } from '@angular/core';

declare var chrome: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'popup';
  badgeText = "Badge";

  setText() {
    console.log('setText()!', this.badgeText);
    chrome.browserAction.setBadgeText({ text: this.badgeText });
  }

  setColor(color: string) {
    chrome.browserAction.setBadgeBackgroundColor({ color });
  }

  showCurrentTab() {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      console.log(tabs);
      if (tabs.length > 0) {
        if (tabs[0].url !== undefined && tabs[0].url !== null && tabs[0].url !== '') {
          let tabId = tabs[0].id;
          let tabURL = tabs[0].url;
          let tabTitle = tabs[0].title;
          let favIconUrl = tabs[0].favIconUrl;
          console.log({ tabId, tabURL, tabTitle, favIconUrl, detail: tabs[0] });
        }
      }
    });
  }
}
