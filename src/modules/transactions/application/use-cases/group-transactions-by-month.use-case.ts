import { UseCase } from '@/core/application/case.decorator';
import { InjectService } from '@/core/application/inject-service.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { groupTransactionsByMonth } from '@/modules/finance/domain/utils/get-profitability-by-months';
import {
  TRANSACTIONS_SERVICE_TOKEN,
  TransactionsService,
} from '@/modules/transactions/domain/contracts/transactions.service';
import { TransactionsGroups } from '@/modules/transactions/domain/types/transactions-groups.type';

@UseCase()
export class GroupTransactionsByMonthUseCase implements Executable {
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

    const groupedTransactions = groupTransactionsByMonth(
      transactions.map((transaction) => transaction.toJson()),
    );

    return {
      groups: groupedTransactions,
    };
  }
}
