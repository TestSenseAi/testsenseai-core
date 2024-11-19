import { AIProvider } from '../providers/aiProvider';

export class NaturalLanguageProcessor {
  constructor(private aiProvider: AIProvider) {}

  async convertToTestScript(description: string): Promise<string> {
    const prompt = `Convert the following test description into a TestSenseAi test script:\n${description}`;
    return await this.aiProvider.generateText(prompt);
  }
}
