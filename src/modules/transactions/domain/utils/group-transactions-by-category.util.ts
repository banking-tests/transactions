import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionGroups } from '@/modules/transactions/domain/types/transaction-group.type';

export function groupTransactionsByCategory(transactions: Transaction[]): TransactionGroups {
  return transactions.reduce((acc: TransactionGroups, transaction: Transaction) => {
    const key = transaction.category || 'uncategorized';
    if (!acc[key]) {
      acc[key] = { total: 0, transactions: [], amount: 0 };
    }
    acc[key].transactions.push(transaction);
    acc[key].total += 1;
    acc[key].amount += +Number(transaction.amount).toPrecision(2);
    return acc;
  }, {});
}
