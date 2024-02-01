import { Pagination } from '@/core/domain/pagination';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionGroups } from '@/modules/transactions/domain/types/transaction-group.type';

export type PaginateTransactionsGroups = Omit<Pagination<Transaction>, 'docs'> & {
  groups: TransactionGroups;
};

export type TransactionsGroups = {
  groups: TransactionGroups;
};
