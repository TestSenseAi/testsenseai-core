import { Page } from 'playwright';
import { generateSelectors } from '../utils/selectorGenerator';

export class DOMExtractor {
  constructor(private page: Page) {}

  async extractDOM(): Promise<any> {
    // Get the entire HTML content
    const domContent = await this.page.content();

    // Extract elements and their selectors
    const elements = await this.page.$$eval('*', (nodes) =>
      nodes.map((node) => ({
        tagName: node.tagName,
        id: node.id,
        classes: node.className,
        textContent: node.textContent,
        selectors: [] as string[], // We'll populate this next
      })),
    );

    // Generate selectors for each element
    for (const element of elements) {
      element.selectors = generateSelectors(element);
    }

    return {
      domContent,
      elements,
    };
  }
}
