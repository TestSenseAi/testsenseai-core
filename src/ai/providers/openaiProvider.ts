import axios from 'axios';
import { AIProvider, GenerateTextOptions } from './aiProvider';

import OpenAI from 'openai';
import { config } from '../../config/config';
import { LoggerType } from '../../utils/types';
import { Logger } from '../../utils/logger';

export class OpenAIProvider implements AIProvider {
  private apiKey: string = config.openAIConfig.apiKey;
  private apiUrl: string = config.openAIConfig.apiUrl;
  private openai: OpenAI = new OpenAI({
    apiKey: this.apiKey,
    baseURL: this.apiUrl,
  });
  private logger: LoggerType = new Logger('OpenAIProvider');

  constructor() {
    this.logger.info('OpenAIProvider initialized');
    this.logger.info(`OpenAI instance: ${JSON.stringify(this.openai)}`);
  }

  async generateText(
    prompt: string,
    options: GenerateTextOptions = {},
  ): Promise<string> {
    const data = {
      model: options.model || 'gpt-4o',
      prompt,
      max_tokens: options.maxTokens || 150,
      temperature: options.temperature || 0.7,
    };

    try {
      const responseOpenAI = await this.openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        ...data,
      });

      return (
        responseOpenAI.choices[0]?.message.content?.trim() || 'Null response'
      );
    } catch (error) {
      throw new Error(`OpenAI Beta API error: ${error}`);
    }
  }

  async selfHealSelector(dom: string, selector: string): Promise<string> {
    return this.selfHealSelector(dom, selector);
  }

  async convertToTestScript(description: string): Promise<string> {
    return this.convertToTestScript(description);
  }

  async generateMethodName(element: any): Promise<string> {
    const prompt = `Generate a descriptive method name for an element with the following attributes:\n${JSON.stringify(
      element,
    )}\nMethod name should be in camelCase and start with a verb.`;
    const response = await this.generateText(prompt);
    return response;
  }
}
