import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const corsConfig = registerAs(
  'cors',
  (): CorsOptions => ({
    origin: process.env.CORS_ORIGINS
      ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim())
      : '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

export const corsValidation = Joi.object({
  CORS_ORIGINS: Joi.string().optional(),
});
