import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

export type TransactionGroups = {
  [category: string]: {
    total: number;
    transactions: Transaction[];
    amount: number;
  };
};
