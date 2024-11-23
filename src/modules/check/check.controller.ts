import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ApiError } from '@modules/error/api-error.entity';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { CreateCheckDto } from './dto/create-check.dto';
import { CheckService } from './check.service';
import { CheckDto } from './dto/check.dto';
import { CheckPreviewDto } from './dto/check-preview.dto';

@Controller('checks')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a check',
    operationId: 'createCheck',
    tags: ['check'],
  })
  @ApiOkResponse({ type: CheckDto })
  public async createCheck(@Body() body: CreateCheckDto) {
    const check = await this.checkService.create(body);
    return CheckDto.fromEntity(check);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all checks',
    operationId: 'getChecks',
    tags: ['check'],
  })
  @ApiOkResponse({ type: [CheckPreviewDto] })
  public async getChecks() {
    const checks = await this.checkService.findAll();
    return checks.map(CheckPreviewDto.fromEntity);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a check by id',
    operationId: 'getCheckById',
    tags: ['check'],
  })
  @ApiOkResponse({ type: CheckDto })
  public async getCheckById(@Param('id') id: string) {
    const check = await this.checkService.findById(id);
    if (!check) throw new ApiError(ApiErrorCode.EntityNotFound);
    return CheckDto.fromEntity(check);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a check by id',
    operationId: 'deleteCheckById',
    tags: ['check'],
  })
  @ApiOkResponse()
  public async deleteCheckById(@Param('id') id: string) {
    await this.checkService.delete(id);
  }
}
