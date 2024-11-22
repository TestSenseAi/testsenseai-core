import { TestGenerator } from '../services/testGenerator';
import { OpenAIProvider } from '../providers/openaiProvider';
import { ClaudeProvider } from '../providers/claudeProvider';

describe('TestGenerator - OpenAI', () => {
  let testGenerator: TestGenerator;

  beforeEach(() => {
    const openaiProvider = new OpenAIProvider();
    testGenerator = new TestGenerator(openaiProvider);
  });

  it('should generate test cases', async () => {
    const requirement = 'User can log in with valid credentials.';
    const testCases = await testGenerator.generateTestCases(requirement);

    expect(testCases).toBeDefined();
    expect(testCases.length).toBeGreaterThan(0);
  });
});

describe('TestGenerator - Claude', () => {
  let testGenerator: TestGenerator;

  beforeEach(() => {
    const claudeProvider = new ClaudeProvider();
    testGenerator = new TestGenerator(claudeProvider);
  });

  it('should generate test cases', async () => {
    const requirement = 'User can log in with valid credentials.';
    const testCases = await testGenerator.generateTestCases(requirement);

    expect(testCases).toBeDefined();
    expect(testCases.length).toBeGreaterThan(0);
  });
});
