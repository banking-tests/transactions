import { UseCase } from '@/core/application/case.decorator';
import { InjectService } from '@/core/application/inject-service.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import {
  TRANSACTIONS_SERVICE_TOKEN,
  TransactionsService,
} from '@/modules/transactions/domain/contracts/transactions.service';
import { TransactionsGroups } from '@/modules/transactions/domain/types/transactions-groups.type';
import { groupTransactionsByCategory } from '@/modules/transactions/domain/utils/group-transactions-by-category.util';

@UseCase()
export class GroupTransactionsByCategoryUseCase implements Executable {
  constructor(
    @InjectService(TRANSACTIONS_SERVICE_TOKEN)
    private readonly transactionsService: TransactionsService,
  ) {}

  public async execute(
    ctx: Context,
    filter: Json,
    options: QueryParsedOptions,
  ): Promise<TransactionsGroups> {
    const transactions = await this.transactionsService.findByAccount(
      filter.account,
      filter,
      options,
    );
    const groupedTransactions = groupTransactionsByCategory(
      transactions.docs.map((transaction) => transaction.toJson()),
    );

    return {
      total: transactions.total,
      page: transactions.page,
      pages: transactions.pages,
      limit: transactions.limit,
      offset: transactions.offset,
      hasMore: transactions.hasMore,
      nextPage: transactions.nextPage,
      prevPage: transactions.prevPage,
      groups: groupedTransactions,
    };
  }
}
