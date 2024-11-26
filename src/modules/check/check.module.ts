import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenaiModule } from '@modules/openai/openai.module';
import { IssueModule } from '@modules/issue/issue.module';
import { AuthModule } from '@modules/auth/auth.module';
import { PdfModule } from '@modules/pdf/pdf.module';
import { SaplingModule } from '@modules/sapling/sapling.module';
import { CheckService } from './check.service';
import { CheckController } from './check.controller';
import { Check } from './entities/check.entity';

@Module({
  imports: [
    AuthModule,
    OpenaiModule,
    IssueModule,
    PdfModule,
    SaplingModule,
    TypeOrmModule.forFeature([Check]),
  ],
  controllers: [CheckController],
  providers: [CheckService],
  exports: [TypeOrmModule, CheckService],
})
export class CheckModule {}
