import { Container } from 'inversify';
import { TYPES } from './types';
import { AIProvider } from './ai/providers/aiProvider';
import { OpenAIProvider } from './ai/providers/openaiProvider';
import { ClaudeProvider } from './ai/providers/claudeProvider';
import { TestGenerator } from './ai/services/testGenerator';
import { config } from './config/config';

const container = new Container();

// Bind AIProvider
if (config.aiProvider === 'openai') {
  container.bind<AIProvider>(TYPES.AIProvider).to(OpenAIProvider);
} else if (config.aiProvider === 'claude') {
  container.bind<AIProvider>(TYPES.AIProvider).to(ClaudeProvider);
} else {
  throw new Error(`Unsupported AI provider: ${config.aiProvider}`);
}

// Bind Services
container.bind<TestGenerator>(TYPES.TestGenerator).to(TestGenerator);
// Bind other services similarly

export { container };
