import { OpenAIProvider } from '../../../src/ai/providers/openaiProvider';
import axios from 'axios';
import { Config } from '../../../src/config/config';

jest.mock('axios');

describe('OpenAIProvider', () => {
  let openAIProvider: OpenAIProvider;

  beforeEach(() => {
    openAIProvider = new OpenAIProvider();
  });

  it('should generate text', async () => {
    const prompt = 'Test prompt';
    const mockedResponse = {
      data: {
        choices: [
          {
            message: {
              content: 'Generated response from OpenAI.',
            },
          },
        ],
      },
    };

    (axios.post as jest.Mock).mockResolvedValue(mockedResponse);

    const response = await openAIProvider.generateText(prompt);

    expect(response).toBe('Generated response from OpenAI.');
    expect(axios.post).toHaveBeenCalledWith(
      `${Config.openAIApiUrl}/chat/completions`,
      expect.objectContaining({ prompt }),
      expect.any(Object),
    );
  });

  it('should handle errors appropriately', async () => {
    const prompt = 'Test prompt';
    const errorMessage = 'Network Error';

    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(openAIProvider.generateText(prompt)).rejects.toThrow(
      `OpenAI Beta API error: ${errorMessage}`,
    );
  });
});
