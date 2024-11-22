import { OpenAIProvider } from '../../../src/ai/providers/openaiProvider';
import OpenAI from 'openai';
import { config } from '../../../src/config/config';

jest.mock('openai');

describe('OpenAIProvider', () => {
  let openAIProvider: OpenAIProvider;
  let mockOpenAI: jest.Mocked<OpenAI>;

  beforeEach(() => {
    mockOpenAI = new OpenAI({
      apiKey: config.openAIConfig.apiKey,
      baseURL: config.openAIConfig.apiUrl,
    }) as jest.Mocked<OpenAI>;

    openAIProvider = new OpenAIProvider();
    openAIProvider['openai'] = mockOpenAI;
  });

  it('should generate text', async () => {
    const prompt = 'Test prompt';
    const mockedResponse = {
      choices: [
        {
          message: {
            content: 'Generated response from OpenAI.',
          },
        },
      ],
    };

    (mockOpenAI.chat.completions.create as jest.Mock).mockResolvedValue(
      mockedResponse,
    );

    const response = await openAIProvider.generateText(prompt);

    expect(response).toBe('Generated response from OpenAI.');
    expect(mockOpenAI.chat.completions.create).toHaveBeenCalledWith({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4o',
      max_tokens: 150,
      temperature: 0.7,
    });
  });

  it('should handle errors appropriately', async () => {
    const prompt = 'Test prompt';
    const errorMessage = 'Network Error';

    (mockOpenAI.chat.completions.create as jest.Mock).mockRejectedValue(
      new Error(errorMessage),
    );

    await expect(openAIProvider.generateText(prompt)).rejects.toThrow(
      `OpenAI Beta API error: ${errorMessage}`,
    );
  });
});
