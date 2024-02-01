import { InjectRepository } from '@/core/application/inject-repository.decorator';
import { Service } from '@/core/application/service.decorator';
import { Filter } from '@/core/domain/interfaces/filter.interface';
import { Pagination } from '@/core/domain/pagination';
import { BaseService } from '@/core/infrastructure/services/base.service';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import {
  TRANSACTIONS_REPOSITORY_TOKEN,
  TransactionsRepository,
} from '@/modules/transactions/domain/contracts/transactions.repository';
import { TransactionEntity } from '@/modules/transactions/domain/entities/transaction.entity';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

@Service()
export class TransactionsService extends BaseService<Transaction, TransactionEntity> {
  constructor(
    @InjectRepository(TRANSACTIONS_REPOSITORY_TOKEN)
    private readonly transactionsRepository: TransactionsRepository,
  ) {
    super(transactionsRepository);
  }

  public async findByAccount(
    account: string,
    filter: Filter<Transaction>,
    options: QueryParsedOptions,
  ): Promise<Pagination<TransactionEntity>> {
    return this.transactionsRepository.findByAccount(account, filter, options);
  }
}
