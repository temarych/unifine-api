import { ApiProperty } from '@nestjs/swagger';
import { IssueDto } from '@modules/issue/dto/issue.dto';
import { Check } from '../entities/check.entity';

export class CheckDto {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public prompt: string;

  @ApiProperty()
  public summary: string;

  @ApiProperty({ type: [IssueDto] })
  public issues: IssueDto[];

  public static fromEntity(entity: Check): CheckDto {
    const dto = new CheckDto();

    dto.id = entity.id;
    dto.prompt = entity.prompt;
    dto.summary = entity.summary;
    dto.issues = entity.issues.map(IssueDto.fromEntity);

    return dto;
  }
}
