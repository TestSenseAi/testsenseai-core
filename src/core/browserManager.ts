import { chromium, firefox, webkit, Browser, BrowserType } from 'playwright';

export class BrowserManager {
  private browser: Browser | null = null;

  constructor(
    private browserType: 'chromium' | 'firefox' | 'webkit' = 'chromium',
  ) {}

  async launchBrowser(): Promise<Browser> {
    if (this.browser) {
      return this.browser;
    }

    let browserTypeInstance: BrowserType;
    switch (this.browserType) {
      case 'firefox':
        browserTypeInstance = firefox;
        break;
      case 'webkit':
        browserTypeInstance = webkit;
        break;
      default:
        browserTypeInstance = chromium;
    }

    this.browser = await browserTypeInstance.launch({ headless: true });
    return this.browser;
  }

  async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}
