import { BaseMemoryRepository } from '@/core/infrastructure/repositories/base.memory-repository';
import { TransactionEntity } from '@/modules/transactions/domain/entities/transaction.entity';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionModel } from '@/modules/transactions/infrastructure/persistence/database/models/transaction.model';
import { Inject } from '@nestjs/common';
import Datastore from 'nedb-promises';

export class TransactionsMemoryRepository extends BaseMemoryRepository<
  Transaction,
  TransactionEntity
> {
  constructor(
    @Inject(TransactionModel.name)
    private readonly transactionsStore: Datastore<Transaction>,
  ) {
    super(transactionsStore, TransactionEntity);
  }
}
