import { UseCase } from '@/core/application/case.decorator';
import { InjectService } from '@/core/application/inject-service.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import {
  TRANSACTIONS_SERVICE_TOKEN,
  TransactionsService,
} from '@/modules/transactions/domain/contracts/transactions.service';
import { TransactionGroups } from '@/modules/transactions/domain/types/transaction-group.type';
import { groupTransactionsByCategory } from '@/modules/transactions/domain/utils/group-transactions-by-category.util';

@UseCase()
export class GroupTransactionsByCategoryUseCase implements Executable {
  constructor(
    @InjectService(TRANSACTIONS_SERVICE_TOKEN)
    private readonly transactionsService: TransactionsService,
  ) {}

  public async execute(ctx: Context): Promise<TransactionGroups> {
    const transactions = await this.transactionsService.find();
    const groupedTransactions = groupTransactionsByCategory(
      transactions.map((transaction) => transaction.toJson()),
    );

    return groupedTransactions;
  }
}
