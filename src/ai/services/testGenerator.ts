import { AIProvider } from '../providers/aiProvider';
export class TestGenerator {
  private aiProvider: AIProvider;

  constructor(aiProvider: AIProvider) {
    this.aiProvider = aiProvider;
  }

  async generateTestCases(requirement: string): Promise<string[]> {
    const prompt = `Generate test cases for the following requirement:\n${requirement}`;
    const response = await this.aiProvider.generateText(prompt);
    return response
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line);
  }
}
