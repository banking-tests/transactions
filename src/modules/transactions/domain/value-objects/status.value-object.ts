import { ValueObject } from '@/core/domain/value-object';
import { TransactionStatus } from '@/modules/transactions/domain/enums/status.enum';

export class Status extends ValueObject<TransactionStatus> {
  constructor(value: TransactionStatus) {
    super(value);
  }

  public isValid(value: TransactionStatus): boolean {
    return Object.keys(TransactionStatus).includes(value);
  }
}
