import { Repository } from '@/core/application/repository.decorator';
import { Filter } from '@/core/domain/interfaces/filter.interface';
import { Pagination } from '@/core/domain/pagination';
import { BaseRepository } from '@/core/infrastructure/repositories/base.repository';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
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

  public async paginateByAccount(
    account: string,
    filter: Filter<Transaction>,
    options: QueryParsedOptions,
  ): Promise<Pagination<TransactionEntity>> {
    const result = await this.transactionModel.paginate(
      {
        ...filter,
        account: { $in: [account] },
      },
      options,
    );

    return {
      ...result,
      docs: result.docs.map((transaction) => TransactionEntity.create(transaction.toJSON())),
      page: result.page,
      limit: result.limit,
      offset: result.offset,
      total: result.total,
      pages: result.pages,
      prevPage: result.page - 1 > 0 ? result.page - 1 : undefined,
      nextPage: result.page + 1 <= result.pages ? result.page + 1 : undefined,
      hasMore: result.page < result.pages,
    };
  }

  public async findByAccount(
    account: string,
    filter: Filter<Transaction>,
    options: QueryParsedOptions,
  ): Promise<TransactionEntity[]> {
    const docs = await this.transactionModel.find(
      {
        ...filter,
        account: {
          $in: [account],
        },
      },
      {},
      options,
    );

    return docs.map((transaction) => TransactionEntity.create(transaction.toJSON()));
  }
}
