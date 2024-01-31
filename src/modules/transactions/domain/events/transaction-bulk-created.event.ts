import { Context } from '@/core/domain/interfaces/context.interface';
import { TransactionPayload } from '@/modules/transactions/domain/types/transaction-payload.type';

export class TransactionBulkCreatedEvent {
  constructor(
    public readonly ctx: Context,
    public readonly transactions: TransactionPayload[],
  ) {}
}
