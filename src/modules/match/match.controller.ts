import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { AuthGuard } from '@modules/auth/auth.guard';
import { MatchService } from './match.service';
import { MatchDto } from './dto/match.dto';

@Controller()
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post('/checks/:checkId/matches')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get matches for a check',
    description: 'Get matches for a check',
    tags: ['match'],
  })
  @ApiSecurity('bearer')
  @ApiOkResponse({ type: [MatchDto] })
  public async match(@Param('checkId') checkId: string): Promise<MatchDto[]> {
    const matches = await this.matchService.match(checkId);
    return matches.map(MatchDto.fromEntity);
  }
}
