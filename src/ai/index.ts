import { OpenAIProvider } from './providers/openaiProvider';
import { Config } from '../config/config';
import { TestGenerator } from './services/testGenerator';
import { SelectorHealer } from './services/selectorHealer';
import { NaturalLanguageProcessor } from './services/naturalLanguageProcessor';

const aiProvider = new OpenAIProvider(Config.openAIApiKey, Config.openAIApiUrl, Config.useBeta);

export const testGenerator = new TestGenerator(aiProvider);
export const selectorHealer = new SelectorHealer(aiProvider);
export const naturalLanguageProcessor = new NaturalLanguageProcessor(aiProvider);
