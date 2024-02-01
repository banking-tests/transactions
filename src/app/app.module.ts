import { CoreModule } from '@/core/core.module';
import { DatabaseModule } from '@/database/database.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { FinanceModule } from '@/modules/finance/finance.module';
import { HealthModule } from '@/modules/health/health.module';
import { SharedModule } from '@/modules/shared/shared.module';
import { TransactionModule } from '@/modules/transactions/transaction.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CoreModule,
    DatabaseModule,
    HealthModule,
    SharedModule,
    AuthModule,
    TransactionModule,
    FinanceModule,
  ],
})
export class AppModule {}
