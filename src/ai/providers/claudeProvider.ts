// src/ai/providers/claudeProvider.ts

import { AIProvider } from './aiProvider';
import axios from 'axios';
import { Config } from '../../config/config';

export class ClaudeProvider implements AIProvider {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    this.apiKey = Config.claudeApiKey;
    this.apiUrl =
      Config.claudeApiUrl || 'https://api.anthropic.com/v1/complete'; // Update with the correct endpoint
  }

  async generateText(prompt: string): Promise<string> {
    const response = await this.makeRequest(prompt);
    return response;
  }

  async selfHealSelector(dom: string, selector: string): Promise<string> {
    const prompt = `Given the DOM structure:\n${dom}\nFind a valid selector for the element that used to be identified by '${selector}'.`;
    const response = await this.makeRequest(prompt);
    return response;
  }

  async convertToTestScript(description: string): Promise<string> {
    const prompt = `Convert the following test case description into an executable test script:\n${description}`;
    const response = await this.makeRequest(prompt);
    return response;
  }

  private async makeRequest(prompt: string): Promise<string> {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      };

      const data = {
        prompt: prompt,
        model: 'claude-v1', // Or the appropriate model
        max_tokens_to_sample: 500,
        temperature: 0.7,
        stop_sequences: ['\n\nHuman:'],
      };

      const response = await axios.post(this.apiUrl, data, { headers });
      return response.data.completion.trim();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
        throw new Error(`ClaudeProvider Axios error: ${error.message}`);
      } else {
        console.error('Unexpected error:', error);
        throw new Error(`ClaudeProvider unexpected error: ${error.message}`);
      }
    }
  }
}
