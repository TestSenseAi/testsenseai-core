export type BrowserType = 'chromium' | 'firefox' | 'webkit';

export type AIProvider = 'openai' | 'claude';

export type OpenAIConfig = {
  apiKey: string;
  apiUrl: string;
  useBeta: boolean;
  assistantName: string;
  assistantInstructions: string;
  assistantModel: string;
};

export type ClaudeConfig = {
  apiKey: string;
  apiUrl: string;
};

export type Config = {
  aiProvider: AIProvider;
  browserType: BrowserType;
  openAIConfig: OpenAIConfig;
  claudeConfig: ClaudeConfig;
};
