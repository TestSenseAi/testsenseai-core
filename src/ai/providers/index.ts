import OpenAI from 'openai';
import { Config } from '../../config/config';
const openai = new OpenAI({ apiKey: Config.openAIApiKey });

export const main = async () => {
  const assistant = await openai.beta.assistants.create({
    name: 'TestSenseAi',
    instructions:
      'You are a helpful assistant that can test IU elements from a DOM and provide feedback on their accessibility and usability, as well as provide suggestions for improvement, or data related to the elements or business logic And generate a report.',
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

  console.log(assistant);
};

main();
