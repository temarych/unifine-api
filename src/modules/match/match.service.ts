import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckService } from '@modules/check/check.service';
import { ApiError } from '@modules/error/api-error.entity';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { PlagiarismService } from '@modules/plagiarism/plagiarism.service';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
    private readonly checkService: CheckService,
    private readonly plagiarismService: PlagiarismService,
  ) {}

  public async match(checkId: string): Promise<Match[]> {
    const check = await this.checkService.findById(checkId);

    if (!check) throw new ApiError(ApiErrorCode.EntityNotFound);

    const results = await this.plagiarismService.getMatches(check.prompt);

    const matches = await this.matchRepository.save(
      results.map((result) => ({
        url: result.source,
        score: result.score,
        check,
      })),
    );

    return matches;
  }
}
