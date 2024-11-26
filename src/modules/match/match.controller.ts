import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
} from '@nestjs/swagger';
import { AuthGuard } from '@modules/auth/auth.guard';
import { ApiError } from '@modules/error/api-error.entity';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { MatchService } from './match.service';
import { MatchDto } from './dto/match.dto';

@Controller()
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post('/checks/:checkId/matches')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get matches for a check',
    operationId: 'match',
    tags: ['match'],
  })
  @ApiSecurity('bearer')
  @ApiOkResponse({ type: [MatchDto] })
  public async match(@Param('checkId') checkId: string): Promise<MatchDto[]> {
    const matches = await this.matchService.match(checkId);
    return matches.map(MatchDto.fromEntity);
  }

  @Get('/checks/:checkId/matches')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get matches for a check',
    operationId: 'getMatchesByCheckId',
    tags: ['match'],
  })
  @ApiSecurity('bearer')
  @ApiOkResponse({ type: [MatchDto] })
  public async findManyByCheckId(
    @Param('checkId') checkId: string,
  ): Promise<MatchDto[]> {
    const matches = await this.matchService.findManyByCheckId(checkId);
    return matches.map(MatchDto.fromEntity);
  }

  @Get('/matches/:id')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get a match by id',
    operationId: 'getMatchById',
    tags: ['match'],
  })
  @ApiSecurity('bearer')
  @ApiOkResponse({ type: MatchDto })
  @ApiNotFoundResponse({ type: ApiError })
  public async findById(@Param('id') id: string): Promise<MatchDto> {
    const match = await this.matchService.findById(id);
    if (!match) throw new ApiError(ApiErrorCode.EntityNotFound);
    return MatchDto.fromEntity(match);
  }

  @Delete('/matches/:id')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Delete a match by id',
    operationId: 'deleteMatchById',
    tags: ['match'],
  })
  @ApiSecurity('bearer')
  @ApiNoContentResponse()
  public async delete(@Param('id') id: string): Promise<void> {
    await this.matchService.delete(id);
  }
}
