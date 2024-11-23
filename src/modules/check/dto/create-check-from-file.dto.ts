import { ApiProperty } from '@nestjs/swagger';

export class CreateCheckFromFileDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  public file: Express.Multer.File;
}
