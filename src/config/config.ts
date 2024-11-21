import * as dotenv from 'dotenv';

dotenv.config();

export const Config = {
  aiProvider: process.env.AI_PROVIDER || 'openai',
  openAIApiKey: process.env.OPENAI_API_KEY || '',
  openAIApiUrl: process.env.OPENAI_API_URL || 'https://api.openai.com/v1',
  useBeta: process.env.USE_OPENAI_BETA === 'true',
  assistantName: process.env.ASSISTANT_NAME || 'TestSenseAi',
  assistantInstructions:
    process.env.ASSISTANT_INSTRUCTIONS ||
    'You are a helpful assistant that can test UI elements...',
  assistantModel: process.env.ASSISTANT_MODEL || 'gpt-4o',
  claudeApiKey: process.env.CLAUDE_API_KEY || '',
  claudeApiUrl:
    process.env.CLAUDE_API_URL || 'https://api.anthropic.com/v1/complete',
};
