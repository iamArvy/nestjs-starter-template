import { Exclude, Expose } from 'class-transformer';
import { User } from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { createApiResponseDto } from 'src/common/dto/api-response.dto';

@Exclude()
export class UserDto implements Partial<User> {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty({ name: 'email_address' })
  @Expose()
  email: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}

export const UserResponse = createApiResponseDto(UserDto);
