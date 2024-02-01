import { UseCase } from '@/core/application/case.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Filter } from '@/core/domain/interfaces/filter.interface';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { Profitability } from '@/modules/finance/domain/types/profitability.type';
import { getProfitability } from '@/modules/finance/domain/utils/get-profitability';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { GetTransactionsByAccountQuery } from '@/modules/transactions/domain/queries/get-transactions-by-account.query';
import { QueryBus } from '@nestjs/cqrs';

@UseCase()
export class GetProfitabilityUseCase implements Executable {
  constructor(private readonly queryBus: QueryBus) {}

  public async execute(
    ctx: Context,
    filter: Filter<Transaction>,
    options: QueryParsedOptions,
  ): Promise<Profitability> {
    const transactions = await this.queryBus.execute(
      new GetTransactionsByAccountQuery(ctx, filter, options),
    );

    return getProfitability(transactions.map((transaction) => transaction.toJson()));
  }
}
