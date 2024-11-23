import { ApiProperty } from '@nestjs/swagger';
import { IssueType } from '../enums/issue-type.enum';
import { Issue } from '../entities/issue.entity';

export class IssueDto {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public type: IssueType;

  @ApiProperty()
  public text: string;

  @ApiProperty()
  public message: string;

  @ApiProperty()
  public suggestion: string;

  @ApiProperty()
  public startIndex: number;

  @ApiProperty()
  public endIndex: number;

  public static fromEntity(entity: Issue): IssueDto {
    const dto = new IssueDto();

    dto.id = entity.id;
    dto.type = entity.type;
    dto.text = entity.text;
    dto.message = entity.message;
    dto.suggestion = entity.suggestion;
    dto.startIndex = entity.startIndex;
    dto.endIndex = entity.endIndex;

    return dto;
  }
}
