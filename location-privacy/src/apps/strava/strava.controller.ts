import { Body, Controller, Param, Post } from '@nestjs/common';
import { AddStravaInfoDto } from './dto/add-strava_info.dto';
import { StravaService } from './strava.service';

@Controller('strava')
export class StravaController {
  constructor(private readonly stravaService: StravaService) {}

  @Post('/route/:userId')
  async addStravaInfo(
    @Body() addStravaInfoDto: AddStravaInfoDto,
    @Param('userId') userId: number,
  ) {
    return this.stravaService.addStravaInfo(addStravaInfoDto, userId);
  }
}
