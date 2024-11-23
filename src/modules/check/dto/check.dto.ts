import { ApiProperty } from '@nestjs/swagger';
import { Check } from '../entities/check.entity';

export class CheckDto {
  @ApiProperty()
  public prompt: string;

  @ApiProperty()
  public response: string;

  public static fromEntity(entity: Check): CheckDto {
    const dto = new CheckDto();

    dto.prompt = entity.prompt;
    dto.response = entity.response;

    return dto;
  }
}
