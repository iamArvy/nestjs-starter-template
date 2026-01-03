import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { USER_ENDPOINTS } from '../constants';

export const DeactivateUserDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: USER_ENDPOINTS.DEACTIVATE.name }),
    ApiOkResponse({ description: 'User deactivated successfully' }),
    ApiNotFoundResponse({ description: 'User not found' }),
    ApiBadRequestResponse({
      description: 'User already deactivated',
    }),
  );
};
