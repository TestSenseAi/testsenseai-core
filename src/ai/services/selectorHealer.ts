import { AIProvider } from '../providers/aiProvider';

export class SelectorHealer {
  private aiProvider: AIProvider;

  constructor(aiProvider: AIProvider) {
    this.aiProvider = aiProvider;
  }

  async selfHealSelector(dom: string, brokenSelector: string): Promise<string> {
    return this.aiProvider.selfHealSelector(dom, brokenSelector);
  }
}
