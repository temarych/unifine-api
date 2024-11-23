import { ApiProperty } from '@nestjs/swagger';
import { Check } from '../entities/check.entity';
import { CheckDto } from './check.dto';

export class CheckPreviewDto {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public summary: string;

  public static fromEntity(entity: Check): CheckDto {
    const dto = new CheckDto();

    dto.id = entity.id;
    dto.summary = entity.summary;

    return dto;
  }
}
