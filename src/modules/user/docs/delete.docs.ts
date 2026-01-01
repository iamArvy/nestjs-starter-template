import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { USER_ENDPOINTS } from '../constants';

export const DeleteUserDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: USER_ENDPOINTS.DELETE.name }),
    ApiOkResponse({ description: 'User deleted successfully' }),
    ApiNotFoundResponse({ description: 'User not found' }),
    ApiBadRequestResponse({
      description: 'User already deleted',
    }),
  );
};
