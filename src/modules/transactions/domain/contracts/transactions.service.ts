import { Crud } from '@/core/domain/crud.interface';
import { TransactionEntity } from '@/modules/transactions/domain/entities/transaction.entity';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

export const TRANSACTIONS_SERVICE_TOKEN = 'TRANSACTIONS_SERVICE_TOKEN';

export interface TransactionsService extends Crud<Transaction, TransactionEntity> {}
