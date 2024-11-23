import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenaiModule } from '@modules/openai/openai.module';
import { IssueService } from './issue.service';
import { Issue } from './entities/issue.entity';

@Module({
  imports: [OpenaiModule, TypeOrmModule.forFeature([Issue])],
  providers: [IssueService],
  exports: [TypeOrmModule, IssueService],
})
export class IssueModule {}
