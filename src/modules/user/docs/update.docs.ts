import { applyDecorators } from '@nestjs/common';
// import { INVENTORY_ENDPOINTS } from '../constants';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { USER_ENDPOINTS } from '../constants';

export const UpdateUserDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: USER_ENDPOINTS.UPDATE.name }),
    ApiOkResponse({ description: 'User updated successfully' }),
    ApiNotFoundResponse({ description: 'User not found' }),
    ApiConflictResponse({ description: 'User with sku exists' }),
    ApiBadRequestResponse({
      description: 'Invalid input or missing required fields',
    }),
  );
};
