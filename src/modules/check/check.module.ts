import { Module } from '@nestjs/common';
import { OpenaiModule } from '@modules/openai/openai.module';
import { CheckService } from './check.service';
import { CheckController } from './check.controller';

@Module({
  imports: [OpenaiModule],
  controllers: [CheckController],
  providers: [CheckService],
  exports: [CheckService],
})
export class CheckModule {}
