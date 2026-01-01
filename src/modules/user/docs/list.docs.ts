import { applyDecorators } from '@nestjs/common';
import { USER_ENDPOINTS } from '../constants';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ListUserResponse } from '../dto';

export const ListUserDocs = () => {
  return applyDecorators(
    ApiOperation({ summary: USER_ENDPOINTS.LIST.name }),
    ApiOkResponse({
      description: 'List of products retrieved successfully',
      type: ListUserResponse,
    }),
  );
};
