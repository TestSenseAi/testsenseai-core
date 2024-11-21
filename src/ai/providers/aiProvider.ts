export interface AIProvider {
  generateText(prompt: string): Promise<string>;
  selfHealSelector(dom: string, selector: string): Promise<string>;
  convertToTestScript(description: string): Promise<string>;
}

export interface GenerateTextOptions {
  maxTokens?: number;
  temperature?: number;
  [key: string]: any;
}
