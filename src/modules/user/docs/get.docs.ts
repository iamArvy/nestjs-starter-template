import { applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { USER_ENDPOINTS } from '../constants';
import { UserResponse } from '../dto';

export const GetUserDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: USER_ENDPOINTS.GET.name }),
    ApiOkResponse({
      description: 'User retrieved successfully',
      type: UserResponse,
    }),
    ApiNotFoundResponse({ description: 'User not found' }),
  );
};
