import { Crud } from '@/core/domain/crud.interface';
import { TransactionEntity } from '@/modules/transactions/domain/entities/transaction.entity';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

export const TRANSACTIONS_REPOSITORY_TOKEN = 'TRANSACTIONS_REPOSITORY_TOKEN';

export interface TransactionsRepository extends Crud<Transaction, TransactionEntity> {}