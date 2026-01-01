import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { UserDto, UserResponse } from '../dto';
import { USER_CONTROLLER } from '../constants';

export const UserControllerDocs = () => {
  return applyDecorators(
    ApiTags(USER_CONTROLLER.tag),
    ApiExtraModels(UserDto, UserResponse),
  );
};
