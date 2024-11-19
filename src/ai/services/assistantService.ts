import OpenAI from 'openai';
import { Config } from '../../config/config';
import { Logger } from '../../utils/logger';
import { LoggerType } from '../../utils/types';

// Within methods

export class AssistantService {
  private openai: OpenAI;
  private logger: LoggerType;
  constructor() {
    this.openai = new OpenAI({
      apiKey: Config.openAIApiKey,
      baseURL: Config.openAIApiUrl,
      dangerouslyAllowBrowser: Config.useBeta,
    });
    this.logger = new Logger('AssistantService');
  }

  async createAssistant() {
    try {
      const assistant = await this.openai.beta.assistants.create({
        name: 'TestSenseAi',
        instructions:
          'You are a helpful assistant that can test UI elements from a DOM and provide feedback on their accessibility and usability, as well as provide suggestions for improvement, or data related to the elements or business logic and generate a report.',
        model: 'gpt-4o',
        tools: [
          {
            type: 'function',
            function: {
              name: 'test_element',
              description: 'Test an element',
            },
          },
        ],
      });
      this.logger.info('Assistant created successfully.');
      return assistant;
    } catch (error) {
      // Handle errors appropriately
      this.logger.error(`Error creating assistant: ${error}`);
    }
  }
}
