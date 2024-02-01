import { Crud } from '@/core/domain/crud.interface';
import { Filter } from '@/core/domain/interfaces/filter.interface';
import { Pagination } from '@/core/domain/pagination';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { TransactionEntity } from '@/modules/transactions/domain/entities/transaction.entity';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

export const TRANSACTIONS_SERVICE_TOKEN = 'TRANSACTIONS_SERVICE_TOKEN';

export interface TransactionsService extends Crud<Transaction, TransactionEntity> {
  paginateByAccount(
    account: string,
    filter: Filter<Transaction>,
    options: QueryParsedOptions,
  ): Promise<Pagination<TransactionEntity>>;

  findByAccount(
    account: string,
    filter: Filter<Transaction>,
    options: QueryParsedOptions,
  ): Promise<TransactionEntity[]>;
}
