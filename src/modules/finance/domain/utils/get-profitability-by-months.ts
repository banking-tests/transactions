import { TransactionType } from '@/modules/transactions/domain/enums/type.enum';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionGroups } from '@/modules/transactions/domain/types/transaction-group.type';

export function groupTransactionsByMonth(transactions: Transaction[]): TransactionGroups {
  return transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.value_date);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (!acc[yearMonth]) {
      acc[yearMonth] = {
        label: monthName,
        total: 0,
        transactions: [],
        inflowAmount: 0,
        outflowAmount: 0,
        inflowTransactions: 0,
        outflowTransactions: 0,
      };
    }

    acc[yearMonth].total += 1;
    acc[yearMonth].transactions.push(transaction);

    if (transaction.type === TransactionType.INFLOW) {
      acc[yearMonth].inflowAmount += transaction.amount;
      acc[yearMonth].inflowTransactions += 1;
    } else if (transaction.type === TransactionType.OUTFLOW) {
      acc[yearMonth].outflowAmount += transaction.amount;
      acc[yearMonth].outflowTransactions += 1;
    }

    return acc;
  }, {} as TransactionGroups);
}
