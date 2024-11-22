export interface AIProvider {
  generateText(prompt: string): Promise<string>;
  selfHealSelector(dom: string, selector: string): Promise<string>;
  convertToTestScript(description: string): Promise<string>;
  generateMethodName(element: any): Promise<string>;
}

export interface GenerateTextOptions {
  maxTokens?: number;
  temperature?: number;
  [key: string]: any;
}
