import { TestGenerator } from '../services/testGenerator';
import { OpenAIProvider } from '../providers/openaiProvider';
import { ClaudeProvider } from '../providers/claudeProvider';
import { Config } from '../../config/config';

describe('TestGenerator', () => {
  let testGenerator: TestGenerator;

  beforeEach(() => {
    // You can switch between providers here
    // For OpenAIProvider
    const aiProvider = new OpenAIProvider(
      Config.openAIApiKey,
      Config.openAIApiUrl,
      Config.useBeta,
    );
    testGenerator = new TestGenerator(aiProvider);

    // For ClaudeProvider
    // const aiProvider = new ClaudeProvider();
    // testGenerator = new TestGenerator(aiProvider);
  });

  it('should generate test cases', async () => {
    const requirement = 'User can log in with valid credentials.';
    const testCases = await testGenerator.generateTestCases(requirement);

    expect(testCases).toBeDefined();
    expect(testCases.length).toBeGreaterThan(0);
  });
});
