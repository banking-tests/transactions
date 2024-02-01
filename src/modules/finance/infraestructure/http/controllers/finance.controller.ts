import { Context } from '@/core/domain/interfaces/context.interface';
import { Filter } from '@/core/domain/interfaces/filter.interface';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { QueryParser } from '@/core/infrastructure/decorators/query-parser.decorator';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { GetProfitabilityUseCase } from '@/modules/finance/application/use-cases/get-profitability.use-case';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { Controller, Get, ParseUUIDPipe, Query } from '@nestjs/common';

@Controller({
  path: '/finance',
  version: '1',
})
export class FinanceController {
  constructor(private readonly getProfitabilityUseCase: GetProfitabilityUseCase) {}

  @Get('/profitability')
  public getProfitability(
    @Ctx() ctx: Context,
    @Query('account', new ParseUUIDPipe()) account: string,
    @QueryParser('filter') filter: Filter<Transaction>,
    @QueryParser('options') options: QueryParsedOptions,
  ) {
    return this.getProfitabilityUseCase.execute(ctx, filter, options);
  }
}
