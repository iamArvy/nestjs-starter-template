import { appConfig, appValidation } from './app.config';
import { dbConfig, dbValidation } from './db.config';
import { winstonValidation } from './winston.config';

export const config = [appConfig, dbConfig];

export const validationSchema = appValidation
  .concat(winstonValidation)
  .concat(dbValidation);
