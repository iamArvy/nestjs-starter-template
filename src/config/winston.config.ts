import {
  utilities as nestWinstonModuleUtilities,
  WinstonModuleOptions,
} from 'nest-winston';
import * as winston from 'winston';
import * as Joi from 'joi';

export const winstonConfig: WinstonModuleOptions = {
  level: process.env.LOG_LEVEL!,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports: [
    // Console logging
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        nestWinstonModuleUtilities.format.nestLike(), // Nest-style formatting
      ),
    }),
    // File logging for errors
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    // File logging for all logs
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
};

export const winstonValidation = Joi.object({
  LOG_LEVEL: Joi.string().default('info'),
});
