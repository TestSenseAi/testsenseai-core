import { AIProvider } from '../providers/aiProvider';

export class NaturalLanguageProcessor {
  private aiProvider: AIProvider;

  constructor(aiProvider: AIProvider) {
    this.aiProvider = aiProvider;
  }

  async convertToTestScript(description: string): Promise<string> {
    return this.aiProvider.convertToTestScript(description);
  }
}
