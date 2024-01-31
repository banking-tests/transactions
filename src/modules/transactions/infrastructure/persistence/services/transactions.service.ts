import { InjectRepository } from '@/core/application/inject-repository.decorator';
import { Service } from '@/core/application/service.decorator';
import { BaseService } from '@/core/infrastructure/services/base.service';
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
}
