import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export function createApiResponseDto<T>(dataType: Type<T>) {
  class ApiResponseDto {
    @ApiProperty({ example: 200 })
    status_code: number;

    @ApiProperty({ nullable: true })
    message: string;

    @ApiProperty({ type: dataType, nullable: true })
    data: T | null;
  }
  return ApiResponseDto;
}

export function createApiArrayResponseDto<T>(dataType: Type<T>) {
  class ApiArrayResponseDto {
    @ApiProperty({ example: 200 })
    status_code: number;

    @ApiProperty({ nullable: true })
    message: string | null;

    @ApiProperty({ type: [dataType], nullable: true })
    data: T[] | null;
  }
  return ApiArrayResponseDto;
}
export function createApiPaginatedResponseDto<T>(dataType: Type<T>) {
  class PaginatedDataDto {
    @ApiProperty({ type: [dataType] })
    items: T[];

    @ApiProperty({ example: 0 })
    total: number;

    @ApiProperty({ example: 0 })
    page: number;

    @ApiProperty({ example: 0 })
    pageSize: number;
  }

  class ApiPaginatedResponseDto {
    @ApiProperty({ example: 200 })
    status_code: number;

    @ApiProperty({ nullable: true })
    message: string | null;

    @ApiProperty({ type: PaginatedDataDto })
    data: PaginatedDataDto;
  }
  return ApiPaginatedResponseDto;
}
