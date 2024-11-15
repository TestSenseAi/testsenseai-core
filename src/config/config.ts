import * as dotenv from 'dotenv';

dotenv.config();

export const Config = {
  openAIApiKey: process.env.OPENAI_API_KEY || '',
  openAIApiUrl: process.env.OPENAI_API_URL || 'https://api.openai.com/v1',
  useBeta: process.env.USE_OPENAI_BETA === 'true',
  // Add other configurations as needed
};
