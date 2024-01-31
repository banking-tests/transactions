import { Throwable } from '@/core/domain/interfaces/throwable.interface';

export type BulkException<T> = {
  payload: T;
  error?: Throwable;
};
