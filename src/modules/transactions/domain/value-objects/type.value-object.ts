import { ValueObject } from '@/core/domain/value-object';
import { TransactionType } from '@/modules/transactions/domain/enums/type.enum';

export class Type extends ValueObject<TransactionType> {
  constructor(value: TransactionType) {
    super(value);
  }

  public isValid(value: TransactionType): boolean {
    return Boolean(value);
  }
}
