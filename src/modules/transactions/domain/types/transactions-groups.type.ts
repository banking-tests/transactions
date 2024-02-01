import { Pagination } from '@/core/domain/pagination';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionGroups } from '@/modules/transactions/domain/types/transaction-group.type';

export type TransactionsGroups = Omit<Pagination<Transaction>, 'docs'> & {
  groups: TransactionGroups;
};
