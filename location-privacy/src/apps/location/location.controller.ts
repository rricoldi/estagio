import { Body, Controller, Param, Post } from '@nestjs/common';
import { AddRouteDto } from './dto/add-route.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('/route/:userId')
  async addRoute(
    @Body() addRouteDto: AddRouteDto,
    @Param('userId') userId: number,
  ) {
    return this.locationService.addRoute(addRouteDto, userId);
  }
}
