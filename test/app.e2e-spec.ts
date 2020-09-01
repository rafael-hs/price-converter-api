import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { SharedModule } from './../src/shared/shared.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, SharedModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('priceConverterModule', () => {

    it(`create-transaction, get-all, get-by-userId, delete-transaction`,
      async () => {
        const transact = {
          userId: 423,
          sourceCurrency: 'USD',
          sourceValue: 12.00,
          targetCurrency: 'BRL'
        };

        const transactResponse = await request(app.getHttpServer())
          .post('/transact/create-transaction')
          .send(transact)
          .expect(201);
        expect(transactResponse.body).toEqual({
          ...transact,
          userId: expect.any(Number),
          dateConversion: expect.any(String),
          id: expect.any(Number),
          rateConversion: expect.any(Number),
          targetValue: expect.any(Number),
          transactionHashId: expect.any(String),
        });

        const allTransactions = await request(app.getHttpServer())
          .get('/transact/get-all-transactions')
          .expect(200)
        expect(allTransactions.body).toEqual(expect.any(Array));
        expect(allTransactions.body[0]).toEqual({
          ...transact,
          userId: expect.any(Number),
          dateConversion: expect.any(String),
          id: expect.any(Number),
          rateConversion: expect.any(Number),
          targetValue: expect.any(Number),
          transactionHashId: expect.any(String),
        });

        const userId = 423;
        const transactOne = await request(app.getHttpServer())
          .get('/transact/get-transactions-by-user-id')
          .query({ userId })
          .expect(200);
        expect(transactOne.body[0].userId).toEqual(userId);

        const transactDelete = await request(app.getHttpServer())
          .delete('/transact/delete-transaction-by-user-id')
          .send({ userId })
          .expect(200)
        expect(transactDelete.body).toEqual({ raw: [] });
      });

    it('reset registers by test', async () => {
      const userId = 423;
      const transactDelete = await request(app.getHttpServer())
        .delete('/transact/delete-transaction-by-user-id')
        .send({ userId })
        .expect(200)
      expect(transactDelete.body).toEqual({ raw: [] });
    })

  });

});
