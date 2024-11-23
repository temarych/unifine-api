import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreateCheckDto } from './dto/create-check.dto';
import { CheckService } from './check.service';
import { CheckDto } from './dto/check.dto';

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
}
