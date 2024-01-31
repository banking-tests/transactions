import { TransactionStatus } from '@/modules/transactions/domain/enums/status.enum';
import { Status } from '@/modules/transactions/domain/value-objects/status.value-object';

describe('StatusValueObject', () => {
  it('should create a valid status value object', () => {
    const status = new Status(TransactionStatus.PENDING);
    expect(status).toBeInstanceOf(Status);
    expect(status.getValue()).toBe(TransactionStatus.PENDING);
    expect(status.isEqual(new Status(TransactionStatus.PENDING))).toBeTruthy();
  });
});
