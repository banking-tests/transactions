import { CreateTransactionsUseCase } from '@/modules/transactions/application/use-cases/create-transactions.use-case';
import { GroupTransactionsByCategoryUseCase } from '@/modules/transactions/application/use-cases/group-transactions-by-category.use-case';
import { ListTransactionsUseCase } from '@/modules/transactions/application/use-cases/list-transactions.use-case';

export const useCases = [
  CreateTransactionsUseCase,
  ListTransactionsUseCase,
  GroupTransactionsByCategoryUseCase,
];
