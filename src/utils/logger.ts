import pino from 'pino';
import { LoggerType } from './types';

export class Logger implements LoggerType {
  private loggerInstance: pino.Logger;
  private level: pino.Level;
  private serviceName: string;

  constructor(serviceName: string) {
    this.level = 'info';
    this.serviceName = serviceName;
    this.loggerInstance = pino({ level: this.level });
  }

  private formatMessage(message: string) {
    return `[${this.serviceName}] ${message}`;
  }

  info(message: string) {
    this.loggerInstance.info(this.formatMessage(message));
  }

  error(message: string) {
    this.loggerInstance.error(this.formatMessage(message));
  }

  warn(message: string) {
    this.loggerInstance.warn(this.formatMessage(message));
  }

  debug(message: string) {
    this.loggerInstance.debug(this.formatMessage(message));
  }

  setLevel(level: pino.Level) {
    this.loggerInstance.level = level;
  }

  handleError(error: Error, message: string) {
    this.loggerInstance.error({ err: error }, this.formatMessage(message));
  }
}
