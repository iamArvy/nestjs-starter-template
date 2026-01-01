import { applyDecorators } from '@nestjs/common';
// import { INVENTORY_ENDPOINTS } from '../constants';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export const PatchUserDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Partially update a product' }),
    ApiOkResponse({ description: 'User patched successfully' }),
    ApiNotFoundResponse({ description: 'User not found' }),
    ApiConflictResponse({ description: 'User with sku exists' }),
    ApiBadRequestResponse({
      description: 'Invalid input or missing required fields',
    }),
  );
};
