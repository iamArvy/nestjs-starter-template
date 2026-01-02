import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { Server } from 'http';

describe('App (e2e)', () => {
  let app: INestApplication;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const getServer = () => app.getHttpServer() as Server;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET / should return success', () => {
    return request(getServer()).get('/').expect(200);
  });
});
