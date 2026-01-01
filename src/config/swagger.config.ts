import { DocumentBuilder } from '@nestjs/swagger';
import { appConfig } from './app.config';

const { name, version } = appConfig();

export const swaggerConfig = {
  document: new DocumentBuilder()
    .setTitle(name)
    .setDescription('FullstackEdge E-commerce API')
    .setVersion(version)
    .setContact(
      'Oluwaseyi Oke',
      'https://iamarvy.netlify.app',
      'iamarvy.tech@gmail.com',
    )
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .build(),
  path: 'docs',
  options: {
    swaggerOptions: { persistAuthorization: true },
    jsonDocumentUrl: 'swagger/json',
  },
};
