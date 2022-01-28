import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsArray, ValidateNested } from 'class-validator';

export class LocationDto {
  @ApiProperty()
  @IsNumber()
  latitude: number;

  @ApiProperty()
  @IsNumber()
  longitude: number;
}

export class AddRouteDto {
  @ApiProperty({ type: [LocationDto], isArray: true })
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  locations: LocationDto[];
}
