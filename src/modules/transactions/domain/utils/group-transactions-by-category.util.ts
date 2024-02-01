import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionGroups } from '@/modules/transactions/domain/types/transaction-group.type';

export function groupTransactionsByCategory(transactions: Transaction[]): TransactionGroups {
  return transactions.reduce((acc: TransactionGroups, transaction: Transaction) => {
    const key = transaction.category || 'uncategorized';
    if (!acc[key]) {
      acc[key] = {
        label: key,
        total: 0,
        transactions: [],
        inflowAmount: 0,
        outflowAmount: 0,
        inflowTransactions: 0,
        outflowTransactions: 0,
      };
    }
    acc[key].transactions.push(transaction);
    acc[key].total += 1;

    if (transaction.type === 'INFLOW') {
      acc[key].inflowAmount += transaction.amount;
      acc[key].inflowTransactions += 1;
    }

    if (transaction.type === 'OUTFLOW') {
      acc[key].outflowAmount += transaction.amount;
      acc[key].outflowTransactions += 1;
    }

    return acc;
  }, {});
}
