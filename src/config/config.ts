import { appConfig, appValidation } from './app.config';
import { corsConfig, corsValidation } from './cors.config';
import { dbConfig, dbValidation } from './db.config';
import { winstonValidation } from './winston.config';

export const config = [appConfig, corsConfig, dbConfig];

export const validationSchema = appValidation
  .concat(corsValidation)
  .concat(winstonValidation)
  .concat(dbValidation);
