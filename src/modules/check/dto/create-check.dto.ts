import { ApiProperty } from '@nestjs/swagger';

export class CreateCheckDto {
  @ApiProperty({ required: false })
  public topic?: string;

  @ApiProperty({ required: false })
  public style?: string;

  @ApiProperty({ required: false })
  public excludedWords?: string;

  @ApiProperty({ required: false })
  public prompt?: string;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  public file?: Express.Multer.File;
}
