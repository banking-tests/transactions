import { TransactionType } from '@/modules/transactions/domain/enums/type.enum';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

export function getProfitability(transactions: Transaction[]) {
  const { inflow, outflow, inflowTransactions, outflowTransactions } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === TransactionType.INFLOW) {
        acc.inflowTransactions += 1;
        acc.inflow += transaction.amount;
      }
      if (transaction.type === TransactionType.OUTFLOW) {
        acc.outflowTransactions += 1;
        acc.outflow += transaction.amount;
      }

      return acc;
    },
    { inflow: 0, outflow: 0, inflowTransactions: 0, outflowTransactions: 0 },
  );

  let profitability = 0;

  if (inflow !== 0) {
    profitability = ((inflow - outflow) / inflow) * 100;
  }

  return {
    inflow,
    outflow,
    balance: inflow - outflow,
    profitability,
    inflowTransactions: inflowTransactions,
    outflowTransactions: outflowTransactions,
  };
}
