import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AddStravaInfoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  clientId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  clientSecret: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  refresh_token: string;
}
