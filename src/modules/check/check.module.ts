import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenaiModule } from '@modules/openai/openai.module';
import { Issue } from '@modules/issue/entities/issue.entity';
import { CheckService } from './check.service';
import { CheckController } from './check.controller';
import { Check } from './entities/check.entity';

@Module({
  imports: [OpenaiModule, TypeOrmModule.forFeature([Check, Issue])],
  controllers: [CheckController],
  providers: [CheckService],
  exports: [TypeOrmModule, CheckService],
})
export class CheckModule {}
