import { AIProvider } from './providers/aiProvider';
import { OpenAIProvider } from './providers/openaiProvider';
import { ClaudeProvider } from './providers/claudeProvider';
import { Config } from '../config/config';

export function createAIProvider(): AIProvider {
  switch (Config.aiProvider) {
    case 'openai':
      return new OpenAIProvider();
    case 'claude':
      return new ClaudeProvider();
    default:
      throw new Error(`Unsupported AI provider: ${Config.aiProvider}`);
  }
}
