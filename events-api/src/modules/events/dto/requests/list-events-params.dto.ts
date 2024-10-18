import { SortOrder } from './../../../../shared/constants/sort-order.constant';
import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsPositive, IsString, Max } from 'class-validator';
import { SortBy } from 'src/shared/constants/sort-by.constant';

export class ListEventsParamsReqDto {
  @Transform(
    (params) => {
      const { value } = params;

      if (typeof value !== 'string') {
        return undefined;
      }

      const parsedValue = parseInt(value, 10);

      return parsedValue;
    },
    {
      toClassOnly: true,
    },
  )
  @IsOptional()
  @IsInt()
  @IsPositive()
  page?: number;

  @Transform(
    (params) => {
      const { value } = params;

      if (typeof value !== 'string') {
        return undefined;
      }

      const parsedValue = parseInt(value, 10);

      return parsedValue;
    },
    {
      toClassOnly: true,
    },
  )
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Max(1000)
  limit?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @IsEnum(SortBy)
  sort_by: string

  @IsString()
  @IsEnum(SortOrder)
  sort_order: string
}
