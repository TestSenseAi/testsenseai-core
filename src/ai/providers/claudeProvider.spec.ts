import { ClaudeProvider } from '../../../src/ai/providers/claudeProvider';
import axios from 'axios';

jest.mock('axios');

describe('ClaudeProvider', () => {
  let claudeProvider: ClaudeProvider;

  beforeEach(() => {
    claudeProvider = new ClaudeProvider();
  });

  it('should generate text', async () => {
    const prompt = 'Test prompt';
    const mockedResponse = {
      data: {
        completion: 'Generated response from Claude.',
      },
    };

    (axios.post as jest.Mock).mockResolvedValue(mockedResponse);

    const response = await claudeProvider.generateText(prompt);

    expect(response).toBe('Generated response from Claude.');
    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ prompt }),
      expect.any(Object),
    );
  });
});
