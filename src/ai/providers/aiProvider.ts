export interface AIProvider {
  generateText(prompt: string, options?: GenerateTextOptions): Promise<string>;
  selfHealSelector(domStructure: string, brokenSelector: string): Promise<string>;
  convertToTestScript(description: string): Promise<string>;
}

export interface GenerateTextOptions {
  maxTokens?: number;
  temperature?: number;
  [key: string]: any;
}
