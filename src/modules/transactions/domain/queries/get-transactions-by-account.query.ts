import { Context } from '@/core/domain/interfaces/context.interface';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';

export class GetTransactionsByAccountQuery {
  constructor(
    public readonly context: Context,
    public readonly filter: Json,
    public readonly options: QueryParsedOptions,
  ) {}
}
