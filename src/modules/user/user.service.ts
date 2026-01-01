import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import * as dto from './dto';
import * as sysMsg from 'src/common/system-messages';
import { plainToInstance } from 'class-transformer';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  create(createUserDto: dto.CreateUserDto) {
    return this.userRepository.create({
      createPayload: createUserDto,
      transactionOptions: { useTransaction: false },
    });
  }

  async findAll() {
    const { payload, paginationMeta } = await this.userRepository.list({
      paginationPayload: { page: 1, limit: 100 },
      filterRecordOptions: { is_deleted: false },
    });
    const items = plainToInstance(dto.UserDto, payload);
    return {
      message: sysMsg.USERS_LISTED,
      data: items,
      meta: paginationMeta,
    };
  }

  async findOne(id: string) {
    const user = await this.userRepository.get({ identifierOptions: { id } });
    if (!user) {
      throw new NotFoundException(sysMsg.USER_NOT_FOUND);
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({
      identifierOptions: { id },
      updatePayload: updateUserDto,
      transactionOptions: { useTransaction: false },
    });
  }

  remove(id: string) {
    return this.userRepository.update({
      identifierOptions: { id },
      updatePayload: { deleted_at: new Date() },
      transactionOptions: { useTransaction: false },
    });
  }
}
