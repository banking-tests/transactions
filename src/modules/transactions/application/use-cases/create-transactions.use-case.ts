import { UseCase } from '@/core/application/case.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import { AsyncResponse } from '@/core/types/general/async-response.type';
import { TransactionBulkCreatedEvent } from '@/modules/transactions/domain/events/transaction-bulk-created.event';
import { TransactionPayload } from '@/modules/transactions/domain/types/transaction-payload.type';
import { EventBus } from '@nestjs/cqrs';

@UseCase()
export class CreateTransactionsUseCase implements Executable {
  constructor(private readonly eventBus: EventBus) {}

  public async execute(
    ctx: Context,
    transactions: TransactionPayload[],
  ): Promise<AsyncResponse> {
    const event = new TransactionBulkCreatedEvent(ctx, transactions);
    await this.eventBus.publish(event);
    return { message: 'Transactions added to the bulk process' };
  }
}
