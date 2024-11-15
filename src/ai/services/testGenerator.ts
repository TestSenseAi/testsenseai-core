import { AIProvider } from '../providers/aiProvider';

export class TestGenerator {
  constructor(private aiProvider: AIProvider) {}

  async generateTestCases(requirement: string): Promise<string> {
    const prompt = `Generate test cases for the following requirement:\n${requirement}`;
    return await this.aiProvider.generateText(prompt);
  }
}
