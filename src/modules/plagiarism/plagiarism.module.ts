import { Module } from '@nestjs/common';
import { PlagiarismService } from './plagiarism.service';

@Module({
  providers: [PlagiarismService],
  exports: [PlagiarismService],
})
export class PlagiarismModule {}
