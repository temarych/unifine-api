import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenaiModule } from '@modules/openai/openai.module';
import { CheckService } from './check.service';
import { CheckController } from './check.controller';
import { Check } from './entities/check.entity';

@Module({
  imports: [OpenaiModule, TypeOrmModule.forFeature([Check])],
  controllers: [CheckController],
  providers: [CheckService],
  exports: [CheckService],
})
export class CheckModule {}
