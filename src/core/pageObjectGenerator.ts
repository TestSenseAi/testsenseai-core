// src/playwright/pageObjectGenerator.ts

import { DOMExtractor } from './domExtractor';
import { writeFileSync } from 'fs';
import { join } from 'path';

export class PageObjectGenerator {
  constructor(private domExtractor: DOMExtractor) {}

  async generatePageObject(fileName: string): Promise<void> {
    const { elements } = await this.domExtractor.extractDOM();

    const className = this.getClassNameFromFileName(fileName);
    let classContent = `import { Page } from 'playwright';\n\n`;
    classContent += `export class ${className} {\n`;
    classContent += `  constructor(private page: Page) {}\n\n`;

    for (const element of elements) {
      // Generate method names using AI or heuristics
      const methodName = this.generateMethodName(element);
      const selector = element.selectors[0]; // Choose the best selector

      classContent += `  async ${methodName}() {\n`;
      classContent += `    await this.page.click('${selector}');\n`;
      classContent += `  }\n\n`;
    }

    classContent += `}\n`;

    // Write the class to a file
    const outputPath = join(__dirname, '..', 'pageObjects', `${className}.ts`);
    writeFileSync(outputPath, classContent);
  }

  private getClassNameFromFileName(fileName: string): string {
    const baseName = fileName.replace(/\.[^/.]+$/, '');
    return `${baseName.charAt(0).toUpperCase()}${baseName.slice(1)}Page`;
  }

  private generateMethodName(element: any): string {
    // Use AI or simple heuristics to generate method names
    // Placeholder implementation:
    if (element.id) {
      return `click${this.capitalize(element.id)}`;
    } else if (element.textContent) {
      const text = element.textContent.trim().split(' ')[0];
      return `click${this.capitalize(text)}`;
    } else {
      return `click${element.tagName.toLowerCase()}`;
    }
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
