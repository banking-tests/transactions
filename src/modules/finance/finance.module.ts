import { useCases } from '@/modules/finance/application/use-cases';
import { FinanceController } from '@/modules/finance/infraestructure/http/controllers/finance.controller';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [...useCases],
  controllers: [FinanceController],
})
export class FinanceModule {}
