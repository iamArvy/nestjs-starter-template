import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import * as sysMsg from 'src/common/system-messages';

import { USER_ENDPOINTS } from '../constants';
export const ActivateUserDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: USER_ENDPOINTS.ACTIVATE.name }),
    ApiOkResponse({ description: 'User activated successfully' }),
    ApiNotFoundResponse({ description: sysMsg.USER_NOT_FOUND }),
    ApiBadRequestResponse({
      description: sysMsg.USER_ALREADY_ACTIVE,
    }),
  );
};
