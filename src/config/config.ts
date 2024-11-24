import * as dotenv from 'dotenv';
import { AIProvider, BrowserType, Config } from './types';

dotenv.config();

export const config: Config = {
  aiProvider: (process.env.AI_PROVIDER as AIProvider) || 'openai',
  openAIConfig: {
    apiKey: process.env.OPENAI_API_KEY || '',
    apiUrl: process.env.OPENAI_API_URL || 'https://api.openai.com/v1',
    useBeta: process.env.USE_OPENAI_BETA === 'true',
    assistantName: process.env.ASSISTANT_NAME || 'TestSenseAi',
    assistantInstructions:
      process.env.ASSISTANT_INSTRUCTIONS ||
      'You are a helpful assistant that can test UI elements from selectors on the DOM of a website. And also you are able to read a Figma and create test cases that needs to be automated into scripts and create reports about it. Also you are able to write unit tests to the codebase. You are an AI Tester',
    assistantModel: process.env.ASSISTANT_MODEL || 'gpt-4o',
  },
  claudeConfig: {
    apiKey: process.env.CLAUDE_API_KEY || '',
    apiUrl:
      process.env.CLAUDE_API_URL || 'https://api.anthropic.com/v1/complete',
  },
  browserType: (process.env.BROWSER_TYPE as BrowserType) || 'chromium',
};
