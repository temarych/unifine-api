import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ApiError } from '@modules/error/api-error.entity';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { ApiErrorDto } from '@modules/error/api-error.dto';
import { AuthGuard } from '@modules/auth/auth.guard';
import { User } from '@modules/user/entities/user.entity';
import { CreateCheckDto } from './dto/create-check.dto';
import { CheckService } from './check.service';
import { CheckDto } from './dto/check.dto';
import { CheckPreviewDto } from './dto/check-preview.dto';
import { AuthorGuard } from './guards/author.guard';

@Controller('checks')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Create a check',
    operationId: 'createCheck',
    tags: ['check'],
  })
  @ApiSecurity('bearer')
  @ApiCreatedResponse({ type: CheckDto })
  @ApiUnauthorizedResponse({ type: ApiErrorDto })
  public async createCheck(@Body() body: CreateCheckDto, @Req() request) {
    const user = request.user as User;
    const check = await this.checkService.create(body, user.id);
    return CheckDto.fromEntity(check);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get all checks',
    operationId: 'getChecks',
    tags: ['check'],
  })
  @ApiSecurity('bearer')
  @ApiOkResponse({ type: [CheckPreviewDto] })
  @ApiUnauthorizedResponse({ type: ApiErrorDto })
  public async getChecks(@Req() request) {
    const user = request.user as User;
    const checks = await this.checkService.findAllByAuthorId(user.id);
    return checks.map(CheckPreviewDto.fromEntity);
  }

  @Get(':id')
  @UseGuards(AuthGuard, AuthorGuard)
  @ApiOperation({
    summary: 'Get a check by id',
    operationId: 'getCheckById',
    tags: ['check'],
  })
  @ApiSecurity('bearer')
  @ApiOkResponse({ type: CheckDto })
  @ApiNotFoundResponse({ type: ApiErrorDto })
  @ApiUnauthorizedResponse({ type: ApiErrorDto })
  @ApiForbiddenResponse({ type: ApiErrorDto })
  public async getCheckById(@Param('id') id: string) {
    const check = await this.checkService.findById(id);
    if (!check) throw new ApiError(ApiErrorCode.EntityNotFound);
    return CheckDto.fromEntity(check);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, AuthorGuard)
  @ApiOperation({
    summary: 'Delete a check by id',
    operationId: 'deleteCheckById',
    tags: ['check'],
  })
  @ApiSecurity('bearer')
  @ApiNoContentResponse()
  @ApiUnauthorizedResponse({ type: ApiErrorDto })
  @ApiForbiddenResponse({ type: ApiErrorDto })
  public async deleteCheckById(@Param('id') id: string) {
    await this.checkService.delete(id);
  }
}
