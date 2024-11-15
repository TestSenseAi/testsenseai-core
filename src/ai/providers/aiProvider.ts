export interface AIProvider {
  generateText(prompt: string, options?: GenerateTextOptions): Promise<string>;
  // Add other methods as needed, e.g., selfHealSelector
}

export interface GenerateTextOptions {
  maxTokens?: number;
  temperature?: number;
  [key: string]: any;
}
