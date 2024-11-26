import { ApiProperty } from '@nestjs/swagger';
import { Match } from '../entities/match.entity';

export class MatchDto {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public url: string;

  @ApiProperty()
  public score: number;

  public static fromEntity(entity: Match): MatchDto {
    const dto = new MatchDto();

    dto.id = entity.id;
    dto.url = entity.url;
    dto.score = entity.score;

    return dto;
  }
}
