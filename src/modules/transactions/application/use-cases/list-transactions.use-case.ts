import { UseCase } from '@/core/application/case.decorator';
import { InjectRepository } from '@/core/application/inject-repository.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import { Pagination } from '@/core/domain/pagination';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import {
  TRANSACTIONS_SERVICE_TOKEN,
  TransactionsService,
} from '@/modules/transactions/domain/contracts/transactions.service';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';

@UseCase()
export class ListTransactionsUseCase implements Executable {
  constructor(
    @InjectRepository(TRANSACTIONS_SERVICE_TOKEN)
    private readonly transactionsService: TransactionsService,
  ) {}
  public async execute(
    ctx: Context,
    search: string,
    filter: Json,
    options: QueryParsedOptions,
  ): Promise<Pagination<Transaction>> {
    const result = await this.transactionsService.paginate(filter, options);

    return {
      ...result,
      docs: result.docs.map((transaction) => transaction.toJson()),
    };
  }
}
