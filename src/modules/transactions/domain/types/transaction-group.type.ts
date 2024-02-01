import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

type TransactionGroup = {
  label: string;
  total: number;
  transactions: Transaction[];
  inflowAmount: number;
  outflowAmount: number;
  inflowTransactions: number;
  outflowTransactions: number;
};

export type TransactionGroups = {
  [key: string]: TransactionGroup;
};
