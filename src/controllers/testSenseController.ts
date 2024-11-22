import { BrowserManager } from '../core/browserManager';
import { DOMExtractor } from '../core/domExtractor';
import { PageObjectGenerator } from '../core/pageObjectGenerator';
import { AIProvider } from '../ai/providers/aiProvider';
import { OpenAIProvider } from '../ai/providers/openaiProvider'; // Or use provider factory
import { config } from '../config/config';

export class TestSenseController {
  private browserManager: BrowserManager;
  private aiProvider: AIProvider;

  constructor() {
    this.browserManager = new BrowserManager(config.browserType);
    this.aiProvider = new OpenAIProvider(); // Or use provider factory
  }

  async generateTestAssets(url: string, outputFileName: string): Promise<void> {
    const browser = await this.browserManager.launchBrowser();
    const page = await browser.newPage();
    await page.goto(url);

    const domExtractor = new DOMExtractor(page);
    const pageObjectGenerator = new PageObjectGenerator(domExtractor);

    // Inject AI provider into page object generator if needed
    (pageObjectGenerator as any)['aiProvider'] = this.aiProvider;

    await pageObjectGenerator.generatePageObject(outputFileName);

    await this.browserManager.closeBrowser();
  }
}
