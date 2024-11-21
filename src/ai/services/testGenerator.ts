import { injectable, inject } from 'inversify';
import { AIProvider } from '../providers/aiProvider';
import { TYPES } from '../../types';
export class TestGenerator {
  private aiProvider: AIProvider;

  constructor(@inject(TYPES.AIProvider) aiProvider: AIProvider) {
    this.aiProvider = aiProvider;
  }

  async generateTestCases(requirement: string): Promise<string[]> {
    const prompt = `Generate test cases for the following requirement:\n${requirement}`;
    const response = await this.aiProvider.generateText(prompt);
    return response.split('\n');
  }
}
