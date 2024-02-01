import { Context } from '@/core/domain/interfaces/context.interface';
import { Pagination } from '@/core/domain/pagination';
import { ApiKeyHeader } from '@/core/infrastructure/decorators/api-key-header.decorator';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { QueryParser } from '@/core/infrastructure/decorators/query-parser.decorator';
import { Json } from '@/core/types/general/json.type';
import { QueryParsedOptions } from '@/core/types/general/query-parsed-options.type';
import { CreateTransactionsUseCase } from '@/modules/transactions/application/use-cases/create-transactions.use-case';
import { GroupTransactionsByCategoryUseCase } from '@/modules/transactions/application/use-cases/group-transactions-by-category.use-case';
import { ListTransactionsUseCase } from '@/modules/transactions/application/use-cases/list-transactions.use-case';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { CreateTransactionsDto } from '@/modules/transactions/infrastructure/http/dtos/create-transactions.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller({ version: '1', path: 'transactions' })
export class TransactionsController {
  constructor(
    private readonly createTransactionsUseCase: CreateTransactionsUseCase,
    private readonly listTransactionsUseCase: ListTransactionsUseCase,
    private readonly groupTransactionsByCategoryUseCase: GroupTransactionsByCategoryUseCase,
  ) {}

  @Get('/')
  @ApiKeyHeader('List transactions')
  public async listTransactions(
    @Ctx() ctx: Context,
    @QueryParser('search') search: string,
    @QueryParser('filter') filter: Json,
    @QueryParser('options') options: QueryParsedOptions,
  ): Promise<Pagination<Transaction>> {
    return await this.listTransactionsUseCase.execute(ctx, search, filter, options);
  }

  @Post('/')
  @ApiKeyHeader('Create transactions')
  public createTransactions(@Ctx() ctx: Context, @Body() body: CreateTransactionsDto) {
    return this.createTransactionsUseCase.execute(ctx, body.transactions);
  }

  @Get('/groups')
  @ApiKeyHeader('Group transactions by category')
  public groupTransactionsByCategory(
    @Ctx() ctx: Context,
    @QueryParser('filter') filter: Json,
    @QueryParser('options') options: QueryParsedOptions,
  ) {
    return this.groupTransactionsByCategoryUseCase.execute(ctx, filter, options);
  }
}
