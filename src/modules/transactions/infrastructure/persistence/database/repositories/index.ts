import { TRANSACTIONS_REPOSITORY_TOKEN } from '@/modules/transactions/domain/contracts/transactions.repository';
import { TransactionsDatabaseRepository } from '@/modules/transactions/infrastructure/persistence/database/repositories/transactions.database-repository';
import { Provider } from '@nestjs/common';

export const TransactionsRepository: Provider = {
  provide: TRANSACTIONS_REPOSITORY_TOKEN,
  useClass: TransactionsDatabaseRepository,
};
