import { ApiProperty } from '@nestjs/swagger';
import { IssueDto } from '@modules/issue/dto/issue.dto';
import { Check } from '../entities/check.entity';

export class CheckDto {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public prompt: string;

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public summary: string;

  @ApiProperty()
  public aiScore: number;

  @ApiProperty({ type: [IssueDto] })
  public issues: IssueDto[];

  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdAt: Date;

  public static fromEntity(entity: Check): CheckDto {
    const dto = new CheckDto();

    dto.id = entity.id;
    dto.title = entity.title;
    dto.prompt = entity.prompt;
    dto.summary = entity.summary;
    dto.issues = entity.issues.map(IssueDto.fromEntity);
    dto.createdAt = entity.createdAt;
    dto.aiScore = entity.aiScore;

    return dto;
  }
}
