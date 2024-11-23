import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UserDto {
  @ApiProperty({
    example: '66c6fab4f13bf5134c167e8b',
    description: 'The id of the user',
  })
  public id: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
  })
  public email: string;

  public static fromEntity(entity: User): UserDto {
    const dto = new UserDto();
    dto.id = entity.id;
    dto.email = entity.email;
    return dto;
  }
}
