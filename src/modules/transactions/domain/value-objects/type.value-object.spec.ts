import { TransactionType } from '@/modules/transactions/domain/enums/type.enum';
import { Type } from '@/modules/transactions/domain/value-objects/type.value-object';

describe('TypeValueObject', () => {
  it('should create a valid status value object', () => {
    const status = new Type(TransactionType.INFLOW);
    expect(status).toBeInstanceOf(Type);
    expect(status.getValue()).toBe(TransactionType.INFLOW);
    expect(status.isEqual(new Type(TransactionType.INFLOW))).toBeTruthy();
  });
});
