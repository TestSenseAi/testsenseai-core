import { Page } from 'playwright';
import { generateSelectors } from '../utils/selectorGenerator';
import { DOMElement } from './types';

export class DOMExtractor {
  constructor(private page: Page) {}

  async extractDOM(): Promise<{ domContent: string; elements: DOMElement[] }> {
    // Get the entire HTML content
    const domContent = await this.page.content();

    // Extract elements and their selectors
    const elements: DOMElement[] = await this.page.$$eval('*', (nodes) =>
      nodes.map((node) => ({
        tag: node.tagName,
        attributes: {
          id: node.id,
          classes: node.className,
        },
        textContent: node.textContent,
        role: node.role,
        children: [] as DOMElement[],
        selectors: [] as string[],
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
