import { eventHandlers } from '@/modules/transactions/application/events';
import { useCases } from '@/modules/transactions/application/use-cases';
import { TransactionsController } from '@/modules/transactions/infrastructure/http/controllers/transactions.controller';
import { Transactions } from '@/modules/transactions/infrastructure/persistence/database/models/transaction.model';
import { TransactionsRepository } from '@/modules/transactions/infrastructure/persistence/database/repositories';
import { TransactionsService } from '@/modules/transactions/infrastructure/persistence/services';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { UuidModule } from 'nestjs-uuid';

@Module({
  imports: [CqrsModule, MongooseModule.forFeature([Transactions]), UuidModule],
  controllers: [TransactionsController],
  providers: [...eventHandlers, ...useCases, TransactionsRepository, TransactionsService],
})
export class TransactionModule {}
