import { Repository } from '@/core/application/repository.decorator';
import { BaseRepository } from '@/core/infrastructure/repositories/base.repository';
import { TransactionEntity } from '@/modules/transactions/domain/entities/transaction.entity';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { TransactionModel } from '@/modules/transactions/infrastructure/persistence/database/models/transaction.model';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';

@Repository()
export class TransactionsDatabaseRepository extends BaseRepository<
  Transaction,
  TransactionEntity
> {
  constructor(
    @InjectModel(TransactionModel.name)
    private readonly transactionModel: PaginateModel<TransactionModel>,
  ) {
    super(transactionModel, TransactionEntity);
  }
}
