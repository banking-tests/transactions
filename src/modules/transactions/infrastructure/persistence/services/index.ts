import { TRANSACTIONS_SERVICE_TOKEN } from '@/modules/transactions/domain/contracts/transactions.service';
import { TransactionsService as TransactionsServiceClass } from '@/modules/transactions/infrastructure/persistence/services/transactions.service';

import { Provider } from '@nestjs/common';

export const TransactionsService: Provider = {
  provide: TRANSACTIONS_SERVICE_TOKEN,
  useClass: TransactionsServiceClass,
};
