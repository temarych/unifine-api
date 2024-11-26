import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckModule } from '@modules/check/check.module';
import { AuthModule } from '@modules/auth/auth.module';
import { PlagiarismModule } from '@modules/plagiarism/plagiarism.module';
import { Match } from './entities/match.entity';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';

@Module({
  imports: [
    CheckModule,
    AuthModule,
    PlagiarismModule,
    TypeOrmModule.forFeature([Match]),
  ],
  providers: [MatchService],
  controllers: [MatchController],
  exports: [TypeOrmModule, MatchService],
})
export class MatchModule {}
