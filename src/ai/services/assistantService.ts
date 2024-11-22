import OpenAI from 'openai';
import { config } from '../../config/config';
import { Logger } from '../../utils/logger';
import { LoggerType } from '../../utils/types';

export class AssistantService {
  private openai: OpenAI;
  private logger: LoggerType;
  constructor() {
    this.openai = new OpenAI({
      apiKey: config.openAIConfig.apiKey,
      baseURL: config.openAIConfig.apiUrl,
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
      this.logger.error(`Error creating assistant: ${error}`);
      throw new Error(`Error creating assistant: ${error}`);
    }
  }
}
