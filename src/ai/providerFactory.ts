import { AIProvider } from './providers/aiProvider';
import { OpenAIProvider } from './providers/openaiProvider';
import { ClaudeProvider } from './providers/claudeProvider';
import { config } from '../config/config';

export function createAIProvider(): AIProvider {
  switch (config.aiProvider) {
    case 'openai':
      return new OpenAIProvider();
    case 'claude':
      return new ClaudeProvider();
    default:
      throw new Error(`Unsupported AI provider: ${config.aiProvider}`);
  }
}
