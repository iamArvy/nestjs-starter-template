import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig, swaggerConfig, validationConfig } from './config';
import {
  ClassSerializerInterceptor,
  LoggerService,
  ValidationPipe,
} from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { MetricsMiddleware } from './modules/metrics/metrics.middleware';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const { name, isDev, env, port, url, prefix } = appConfig();
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Global Interceptors
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  // Swagger Docs
  SwaggerModule.setup(
    swaggerConfig.path,
    app,
    SwaggerModule.createDocument(app, swaggerConfig.document),
    swaggerConfig.options,
  );

  // Metrics Middleware
  app.use((req, res, next) => new MetricsMiddleware().use(req, res, next));

  // CORS
  const corsOptions = config.getOrThrow<CorsOptions>('cors');
  app.enableCors(corsOptions);

  // Global Prefix
  app.setGlobalPrefix(prefix, { exclude: [swaggerConfig.path] });

  // Global Pipes
  app.useGlobalPipes(new ValidationPipe(validationConfig.options));

  if (isDev) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-call
    app.use(require('morgan')('dev'));
  }

  await app.listen(port);

  const logger = app.get<LoggerService>(WINSTON_MODULE_NEST_PROVIDER);
  logger.log(
    `
      ------------
      Internal Application Started!
      Environment: ${env}
      API:${url}
      API Docs: ${url}/docs
      ------------
  `,
    ` ${name} | ${env}`,
  );
}
bootstrap();
