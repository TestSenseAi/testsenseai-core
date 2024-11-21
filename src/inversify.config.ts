import { Container } from 'inversify';
import { TYPES } from './types';
import { AIProvider } from './ai/providers/aiProvider';
import { OpenAIProvider } from './ai/providers/openaiProvider';
import { ClaudeProvider } from './ai/providers/claudeProvider';
import { TestGenerator } from './ai/services/testGenerator';
import { Config } from './config/config';

const container = new Container();

// Bind AIProvider
if (Config.aiProvider === 'openai') {
  container.bind<AIProvider>(TYPES.AIProvider).to(OpenAIProvider);
} else if (Config.aiProvider === 'claude') {
  container.bind<AIProvider>(TYPES.AIProvider).to(ClaudeProvider);
} else {
  throw new Error(`Unsupported AI provider: ${Config.aiProvider}`);
}

// Bind Services
container.bind<TestGenerator>(TYPES.TestGenerator).to(TestGenerator);
// Bind other services similarly

export { container };
