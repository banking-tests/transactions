import { createApp } from '#/setup';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('/', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await createApp({
      imports: [],
    });

    app.init();
  });

  it('GET / should response HTTP 404', () => {
    return request(app.getHttpServer()).get('/').expect(HttpStatus.NOT_FOUND);
  });
});
