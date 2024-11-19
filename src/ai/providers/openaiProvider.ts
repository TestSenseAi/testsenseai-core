import axios from 'axios';
import { GenerateTextOptions } from './aiProvider';

import OpenAI from 'openai';
import { Config } from '../../config/config';
import { LoggerType } from '../../utils/types';
import { Logger } from '../../utils/logger';

const openai = new OpenAI({ apiKey: Config.openAIApiKey });

export class OpenAIProvider {
  private apiKey: string;
  private apiUrl: string;
  private useBeta: boolean;
  private logger: LoggerType;

  constructor(apiKey: string, apiUrl: string, useBeta: boolean) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
    this.useBeta = useBeta;
  }

  async generateText(prompt: string, options: GenerateTextOptions = {}): Promise<string> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const data = {
      model: options.model || 'gpt-4o', // Use beta model
      prompt,
      max_tokens: options.maxTokens || 150,
      temperature: options.temperature || 0.7,
    };

    try {
      const response = await axios.post(
        `${this.apiUrl}/chat/completions`,
        {
          messages: [{ role: 'user', content: prompt }],
          ...data,
        },
        { headers }
      );
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      // Handle errors appropriately
      throw new Error(`OpenAI Beta API error: ${error}`);
    }
  }
}
