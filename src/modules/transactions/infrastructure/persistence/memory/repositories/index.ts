import { TRANSACTIONS_SERVICE_TOKEN } from '@/modules/transactions/domain/contracts/transactions.service';
import { TransactionsMemoryRepository } from '@/modules/transactions/infrastructure/persistence/memory/repositories/transactions.memory-repository';
import { Provider } from '@nestjs/common';

export const TransactionsRepository: Provider = {
  provide: TRANSACTIONS_SERVICE_TOKEN,
  useClass: TransactionsMemoryRepository,
};
