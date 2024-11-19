import { AIProvider } from '../providers/aiProvider';

export class SelectorHealer {
  constructor(private aiProvider: AIProvider) {}

  async healSelector(domStructure: string, brokenSelector: string): Promise<string> {
    const prompt = `Given the DOM structure:\n${domStructure}\nand the broken selector "${brokenSelector}", suggest a new valid selector.`;
    return await this.aiProvider.generateText(prompt);
  }
}
