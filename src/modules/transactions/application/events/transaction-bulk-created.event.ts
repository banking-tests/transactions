import { InjectRepository } from '@/core/application/inject-repository.decorator';
import { BulkException } from '@/core/domain/exceptions/bulk.exception';
import {
  TRANSACTIONS_SERVICE_TOKEN,
  TransactionsService,
} from '@/modules/transactions/domain/contracts/transactions.service';
import { TransactionBulkCreatedEvent } from '@/modules/transactions/domain/events/transaction-bulk-created.event';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionPayload } from '@/modules/transactions/domain/types/transaction-payload.type';
import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import PromisePool from '@supercharge/promise-pool';
import * as chunk from 'lodash.chunk';
import { InjectUuidService, UuidService } from 'nestjs-uuid';

@EventsHandler(TransactionBulkCreatedEvent)
export class TransactionBulkCreatedHandler
  implements IEventHandler<TransactionBulkCreatedEvent>
{
  constructor(
    @InjectRepository(TRANSACTIONS_SERVICE_TOKEN)
    private readonly transactionsService: TransactionsService,
    @InjectUuidService()
    private readonly uuidService: UuidService,
  ) {}

  public async handle(event: TransactionBulkCreatedEvent): Promise<void> {
    const errors: BulkException<Partial<Transaction>>[] = [];
    await PromisePool.withConcurrency(50)
      .for(chunk(event.transactions, 50))
      .process(async (transactions: TransactionPayload[]) => {
        Logger.log('Bulk of 50 transactions started', event.ctx.requestId);
        const payloads = transactions.map((transaction) => {
          const uuid = this.uuidService.generate();
          return { ...transaction, uuid };
        });

        try {
          const bulk = await this.transactionsService.createMany(payloads);
          const ids = bulk.map((transaction) => transaction.getId()).join(', ');
          Logger.log(`Inserted: ${bulk.length} transactions: ${ids}`, event.ctx.requestId);
          return bulk;
        } catch (error) {
          errors.push(error);
          Logger.error(error, event.ctx.requestId);
          return error;
        }
      });

    Logger.log(`Process finished with ${errors.length} bulks errors`, event.ctx.requestId);
  }
}
