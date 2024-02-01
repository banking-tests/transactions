import { InjectRepository } from '@/core/application/inject-repository.decorator';
import {
  TRANSACTIONS_REPOSITORY_TOKEN,
  TransactionsRepository,
} from '@/modules/transactions/domain/contracts/transactions.repository';
import { GetTransactionsByAccountQuery } from '@/modules/transactions/domain/queries/get-transactions-by-account.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetTransactionsByAccountQuery)
export class GetTransactionsByAccountHandler
  implements IQueryHandler<GetTransactionsByAccountQuery>
{
  constructor(
    @InjectRepository(TRANSACTIONS_REPOSITORY_TOKEN)
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  public execute(query: GetTransactionsByAccountQuery) {
    return this.transactionsRepository.findByAccount(
      query.filter.account,
      query.filter,
      query.options,
    );
  }
}
