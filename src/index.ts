import 'reflect-metadata';
import { container } from './inversify.config';
import { TYPES } from './types';
import { TestGenerator } from './ai/services/testGenerator';

const testGenerator = container.get<TestGenerator>(TYPES.TestGenerator);
